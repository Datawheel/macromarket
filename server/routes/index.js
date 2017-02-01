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

router.get('/company/:id', (req, res) => {
  models.Company.find({
    where: {
      id: req.params.id
    }
  }).then(function(company) {
    res.json(company);
  });
});

module.exports = router;
