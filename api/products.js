module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/products/", (req, res) => {
    // db.Product.findAll({limit: 100}).then(products => res.json(products));
    db.Product.findAll().then(products => res.json(products));
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
    });
  });

};

// productRouter.get("/company/:id", (req, res) => {
//   db.Trade.findProductsByCompany(db, req.params.id).then(trades => {
//     res.send(trades);
//   });
// });
