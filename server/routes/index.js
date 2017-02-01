var express = require('express');
var router = express.Router();
var models = require('../../db/models/index');


router.get('/api', (req, res) => {
  res.status(200).send('App is running');
});

router.get('/api/countries', (req, res) => {
  models.Country.findAll({}).then(function(country) {
     res.json(country);
   });
});

module.exports = router;
