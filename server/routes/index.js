var express = require('express');
var router = express.Router();
var models = require('../../db/models/index');
var passport = require('passport')
var setupPassport = require('../setupPassport');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');


setupPassport();
router.use(require("cookie-parser")())
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());
router.use(require("express-session")({
    secret: process.env.SESSION_SECRET || "secret_cat"
}))
console.log('')
console.log("SESSION_SECRET", process.env.SESSION_SECRET);
console.log('')
router.use(passport.initialize())
router.use(passport.session())
//router.use(flash());

router.get('/', (req, res) => {
    res.status(200).send('App is running');
});

router.get('/secretPage', isLoggedIn, (req, res) => {
  var user = req.user.email;
    res.status(200).send("Hey " + user + "! You can see the secretPage cool!");
});

//authentication
router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            //return res.json(user);
            return res.redirect('/profile');
        });
    })(req, res, next);
});

router.get('/profile', isLoggedIn, (req, res) => {
    models.User.find({
        where: {
            id: req.user.id
        }
    }).then(function(user) {
        res.json(user);
    });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  req.isAuthenticated();
});

function isLoggedIn(req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated())
        return next();

    res.status(401).send("You're not logged in!");
}

router.post('/signup', (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var hash = bcrypt.hashSync(password);

    var newUser = {
        email: email,
        password: hash
    }
    models.User.create(newUser).then(function(user) {
        res.redirect('/user/' + user.id);
    }).catch(function(error) {
        req.flash('error', "Please, choose a different username.")
        res.redirect('/signup')
    })
});


router.get('/countries', (req, res) => {
    models.Country.findAll({}).then(function(country) {
        res.json(country);
    });
});

router.get('/companies', (req, res) => {
    models.Company.findAll({}).then(function(company) {
        res.json(company);
    });
});

router.get('/products', (req, res) => {
    models.Product.findAll({}).then(function(product) {
        res.json(product);
    });
});

router.get('/company/:id', (req, res) => {
    models.Company.find({
        where: {
            id: req.params.id
        }
    }).then(function(company) {
        res.json(company);
    });
});

router.get('/country/:id', (req, res) => {
    models.Country.find({
        where: {
            id: req.params.id
        }
    }).then(function(country) {
        res.json(country);
    });
});

router.get('/product/:id', (req, res) => {
    models.Product.find({
        where: {
            id: req.params.id
        }
    }).then(function(product) {
        res.json(product);
    });
});



module.exports = router;
