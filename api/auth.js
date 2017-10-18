const bcrypt = require("bcrypt-nodejs");

module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/auth/isAuthenticated", (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    }
    else {
      res.json({msg: "Not logged in!"});
    }
  });

  app.post("/api/auth/changePw", (req, res) => {
    if (req.isAuthenticated()) {
      const {oldPassword: password, newPassword, userId} = req.body;
      const newSalt = bcrypt.genSaltSync(10);
      const newHashedPassword = bcrypt.hashSync(newPassword, newSalt);
      db.users.findOne({
        where: {
          id: userId
        }
      }).then(user => {
        const hashedPassword = bcrypt.hashSync(password, user.salt);
        if (user.password === hashedPassword) {
          db.users.update({
            salt: newSalt,
            password: newHashedPassword
          }, {
            where: {
              id: userId
            }
          }).then(() => {
            // res.json(req.params.id);
            res.json({msg: "pw changed!"});
          });
        }
        else {
          return res.status(400).json("The password you entered is Incorrect.");
        }
      })
      .catch(err => res.json(err));
    }
    else {
      return res.status(400).json("Not logged in!");
    }
  });
};
