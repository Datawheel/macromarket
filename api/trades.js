const axios = require("axios");
const isAuthenticated = require("../api-helpers/authHelpers.js").isAuthenticated;
const Op = require("sequelize").Op;

module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/trades/", (req, res) => {
    let {days} = req.query;
    let daysAgo = new Date(1318781876406);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    if (days && (/^\d+$/).test(days)) {
      days = parseInt(days, 10);
      daysAgo = new Date(today - new Date(oneDay * days));
      daysAgo.setHours(23, 59, 59);
    }

    db.Trade.findAll({
      where: {
        createdAt: {
          [Op.lt]: today,
          [Op.gt]: daysAgo
        }
      },
      order: [["createdAt", "DESC"]],
      limit: 100,
      include: [db.Product, db.Company, db.Country]
    })
      .then(trades => res.json(trades))
      .catch(err => res.json(err));
  });

  // TODO: rename to "/api/trades/byCompany/:companyId"
  app.get("/api/trades/company/:companySlug", (req, res) => {
    const {companySlug: slug} = req.params;
    db.Company.findOne({
      where: {slug},
      include: [db.Country]
    }).then(company => {
      return db.Trade.findAll({
        where: {
          company_id: company.id
        },
        include: [db.Product, db.Country]
      }).then(trades => res.json(trades));
    })
    .catch(() => res.json([]));
  });

  app.post("/api/trades/company/:companyId", isAuthenticated, (req, res) => {
    const {companyId: company_id} = req.params;
    const {body: trades} = req;

    db.Company.findOne({
      where: {id: company_id}
    }).then(company => {
      if (!company) {
        return res.json({error: "Company not found."});
      }
      if (company.uid !== req.user.id) {
        return res.json({error: "You do not have permission to edit trades for this company."});
      }
      return db.Trade.destroy({
        where: {company_id}
      }).then(() => {
        const tPromises = trades.map(t => {
          // console.log({trade_flow: t.tradeFlow, company_id, product_id: t.product.id, country_id: t.country.id});
          const country_id = t.country ? t.country.id : null;
          return db.Trade.findOrCreate({
            where: {trade_flow: t.tradeFlow, company_id, product_id: t.product.id, country_id}
          }).catch(err => console.log("err", err));
        });

        Promise.all(tPromises).then(() => {
          res.json({msg: "done."});
        })
        .catch(err => res.json(err));
      });
    })
    .catch(err => res.json(err));
  });

  app.delete("/api/trades/company/:companyId/product/:productId", isAuthenticated, (req, res) => {
    const {companyId: company_id, productId: product_id} = req.params;

    db.Company.findOne({
      where: {id: company_id}
    }).then(company => {
      if (!company) {
        return res.json({error: "Company not found."});
      }
      if (company.uid !== req.user.id) {
        return res.json({error: "You do not have permission to delete trades for this company."});
      }
      return db.Trade.destroy({
        where: {company_id, product_id}
      }).then(() =>
        res.json({success: true})
      )
      .catch(err => res.json(err));
    })
    .catch(err => res.json(err));

  });

  // TODO: rename to "/api/trades/byCountry/:countryId"
  app.get("/api/trades/country/:countryId", (req, res) => {
    const {countryId: country_id} = req.params;
    db.Trade.findAll({
      where: {
        country_id
      },
      include: [db.Product, db.Company]
    }).then(trades => res.json(trades))
    .catch(err => res.json(err));
  });

  // TODO: rename to "/api/trades/byProduct/:productId"
  app.get("/api/trades/product/:productId", (req, res) => {
    const {productId: product_id} = req.params;
    db.Trade.findAll({
      where: {
        product_id: {$ilike: `${product_id}%`}
      },
      include: [db.Country, db.Company]
    }).then(trades => res.json(trades))
    .catch(err => res.json(err));
  });

  app.get("/api/trades/user/:uid", (req, res) => {
    const {uid} = req.params;
    db.Company.findAll({
      where: {uid}
    }).then(companies => {
      const companyIds = companies.reduce((arr, c) => arr.concat([c.id]), []);
      return db.Trade.findAll({
        where: {
          company_id: companyIds
        },
        include: [db.Country, db.Product]
      }).then(trades => res.json(trades))
      .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
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
