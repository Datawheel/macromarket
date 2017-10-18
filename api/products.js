module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/products/", (req, res) => {
    // db.Product.findAll({limit: 100}).then(products => res.json(products));
    db.Product.findAll()
      .then(products => res.json(products))
      .catch(err => res.json(err));
  });

  app.get("/api/products/:id", (req, res) => {
    const {id} = req.params;
    db.Product.findOne({
      where: {id},
      raw: true
    }).then(product => {
      if (product === null) {
        return res.json({error: "Product not found."});
      }
      return res.json(product);
    })
    .catch(err => res.json(err));
  });

};
