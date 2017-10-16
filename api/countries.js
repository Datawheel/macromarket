module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/countries/", (req, res) => {
    db.Country.findAll({}).then(countries => res.json(countries));
  });

  app.get("/api/countries/:id", (req, res) => {
    const {id} = req.params;
    db.Country.findOne({
      where: {id},
      raw: true
    }).then(country => {
      if (country === null) {
        return res.json({error: "Country not found."});
      }
      return res.json(country);
    })
    .catch(err => res.json(err));
  });

};
