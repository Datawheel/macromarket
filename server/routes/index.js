var express = require('express');
var router = express.Router();
var models = require('../../db/models/index');


router.get('/', (req, res) => {
  res.status(200).send('App is running');
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
