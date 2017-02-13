const passport = require("passport");
const bcrypt = require("bcrypt-nodejs");
const models = require("../../db/models/index");
const User = models.User;
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = process.env.SESSION_SECRET || "tasmanianDevil";

//  authentication
module.exports = function(router) {
  router.use(bodyParser.urlencoded({
    extended: false
  }));
  router.use(bodyParser.json());
  router.use(passport.initialize());
  router.use(passport.session());

  const strategy = new JwtStrategy(jwtOptions, (jwtPayload, next) => {
    User.findOne({
      where: {
        id: jwtPayload.id
      }
    }).then((user, err) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return next(null, false, {
          message: "Incorrect email."
        });
      }
      return next(null, user);
    });
  });
  passport.use(strategy);

  // Authentication routes
  router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
      where: {
        email
      }
    }).then((user, err) => {
      if (err) {
        res.status(401).json({
          message: err
        });
      }
      if (!user) {
        res.status(401).json({
          message: "No such user found."
        });
      }

      const hashedPassword = bcrypt.hashSync(password, user.salt);
      if (user.password !== hashedPassword) {
        res.status(401).json({
          message: "Incorrect password."
        });
      }
      else {
        const payload = {
          id: user.id
        };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({
          message: "ok",
          token
        });
      }
    });
  });

  router.get("/logout", (req, res) => {
    req.logout();
    res.json({message: "Logged out."});
  });

  router.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    console.log(req.body);
    const newUser = {
      email,
      salt,
      password: hashedPassword
    };

    models.User.create(newUser).then(user => {
      const payload = {
        id: user.id
      };
      const token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.json({
        message: "ok",
        token
      });
    })
    .catch(error => {
      console.log("error in creating user:", error);
      res.status(500).json({
        message: "Passwords did not match."
      });
    });
  });

  router.get("/authenticate", passport.authenticate("jwt", {
    session: false
  }), (req, res) => {
    const userResp = {
      user: req.user
    } || null;
    res.json(userResp);
  });

};
