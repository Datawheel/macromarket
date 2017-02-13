const express = require("express");
const router = express.Router();
const  models = require("../../db/models/index");
const  authentication = require("./authentication");

router.get("/", (req, res) => {
  res.status(200).send("App is running");
});

authentication(router);

// router.get("/authenticate", isLoggedIn, (req, res) => {
//   models.User.find({
//     where: {
//       id: req.user.id
//     }
//   }).then(function(user) {
//     res.json(user);
//   });
// });
//
// router.get('/logout', function(req, res) {
//   req.logout();
//   res.redirect('/');
// });
//
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated())
//     return next();
//   res.status(401).send("You're not logged in!");
// }
//
// router.post('/signup', (req, res, next) => {
//   var email = req.body.email;
//   var password = req.body.password;
//   var hash = bcrypt.hashSync(password);
//
//   var newUser = {
//     email: email,
//     password: hash
//   }
//
//   models.User.create(newUser).then(function(user) {
//     req.logIn(user, function(err) {
//       if (err) {
//         return next(err);
//       }
//       return res.json(req.user);
//     });
//   }).catch(function(error) {
//     return next(error);
//   });
// });


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
