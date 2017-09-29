const axios = require("axios");

module.exports = function(app) {
  const {db} = app.settings;

  // TODO: rename to "/api/trades/byCompany/:companyId"
  app.get("/api/trades/company/:companyId", (req, res) => {
    const {companyId: company_id} = req.params;
    db.Trade.findAll({
      where: {
        company_id
      },
      include: [db.Product, db.Country]
    }).then(trades => res.json(trades));
  });

  app.post("/api/trades/company/:companyId", (req, res) => {
    const {companyId: company_id} = req.params;
    const {body: trades} = req;

    const tPromises = trades.map(t => {
      // console.log({trade_flow: t.tradeFlow, company_id, product_id: t.product.id, country_id: t.country.id});
      const country_id = t.country ? t.country.id : null;
      return db.Trade.findOrCreate({
        where: {trade_flow: t.tradeFlow, company_id, product_id: t.product.id, country_id}
      }).catch(err => console.log("err", err));
    });

    Promise.all(tPromises).then(tradeResponses => {
      // console.log("\n\n\ntradeResponses\n")
      // console.log(tradeResponses)
      res.json({msg: "done."});
    });
  });

  app.delete("/api/trades/company/:companyId/product/:productId", (req, res) => {
    const {companyId: company_id, productId: product_id} = req.params;

    db.Trade.destroy({
      where: {company_id, product_id}
    }).then(() =>
      res.json({success: true})
    );

  });

  // TODO: rename to "/api/trades/byCountry/:countryId"
  app.get("/api/trades/country/:countryId", (req, res) => {
    const {countryId: country_id} = req.params;
    db.Trade.findAll({
      where: {
        country_id
      },
      include: [db.Product, db.Company]
    }).then(trades => res.json(trades));
  });

  // TODO: rename to "/api/trades/byProduct/:productId"
  app.get("/api/trades/product/:productId", (req, res) => {
    const {productId: product_id} = req.params;
    db.Trade.findAll({
      where: {
        product_id: {$ilike: `${product_id}%`}
      },
      include: [db.Country, db.Company]
    }).then(trades => res.json(trades));
  });

  app.get("/api/trades/user/:uid", (req, res) => {
    const {uid} = req.params;
    db.Company.findAll({
      where: {uid}
    }).then(companies => {
      const companyIds = companies.reduce((arr, c) => arr.concat([c.id]), []);
      db.Trade.findAll({
        where: {
          company_id: companyIds
        },
        include: [db.Country, db.Product]
      }).then(trades => res.json(trades));
    });
  });

  app.get("/api/trades/ca_country/:countryId", (req, res) => {
    const {countryId} = req.params;
    const config = {
      headers: {
        clientToken: process.env.CA_CLIENT_TOKEN
      }
    };

    axios.get(`http://m.connectamericas.com/apirest/v6/company?items_per_page=60&&country=${countryId}`, config)
      .then(response => {
        const data = response.data._embedded.company;
        const companies = [];
        data.forEach(company => {
          const newCompany = {
            id: `ca_${company.id}`,
            name: company.name,
            profile_type: "connectamericas",
            image: company.photo_url
          };
          companies.push(newCompany);
        });
        res.json(companies);
      })
      .catch(err => {
        console.log(err);
      });
  });

};
