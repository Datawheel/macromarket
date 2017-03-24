const express = require("express");
const router = express.Router();
const models = require("../../db/models/index");
const authentication = require("./authentication");
const imgUpload = require("./multers3.js");

router.get("/", (req, res) => {
  res.status(200).send("App is running");
});

authentication(router);
imgUpload(router);

router.get("/search/:f/:q", (req, res) => {
  const filter = req.params.f;
  const query = req.params.q;
  models.Search.search(query, filter).then(results => {
    res.json(results);
  });
});

router.post("/registerCompany", (req, res) => {
  const newCompany = req.body;

  models.Company.create(newCompany).then(company => {
    models.User.update({
      company_id: company.id
    }, {
      where: {
        id: newCompany.user_id
      }
    }).then(() => {
      res.json(company.id);
    }).catch(err => {
      res.status(500).send({
        err,
        message: "Error in registering company."
      });
    });
  }).catch(error => {
    res.status(500).json({
      error,
      message: "Error in creating company."
    });
  });
});

router.post("/trades/:id", (req, res) => {
  const company_id = req.params.id;
  const trades = req.body;
  var inserted = 0;

  for (var i = 0, len = trades.length; i < len; i++) {
    if (trades[i].id) {
      models.Trade.update(
        trades[i], {
          where: {
            id: trades[i].id
          }
        }).then(() => {
        if (++inserted === trades.length) {
          res.json(company_id);
        }
      });
    } else {
      models.Trade.create({
        product_id: trades[i].product_id,
        company_id,
        trade_flow: "imports",
        country_id: trades[i].country_id
      }).then(() => {
        if (++inserted === trades.length) {
          res.json(company_id);
        }
      });
    }
  }

});

router.delete("/trades", (req, res) => {
  const tradesToDelete = req.body;
  console.log(tradesToDelete, "TRADE");
});
router.get("/countries", (req, res) => {
  models.Country.findAll({}).then(country => {
    res.json(country);
  });
});

router.get("/companies", (req, res) => {
  models.Company.findAll({}).then(company => {
    res.json(company);
  });
});

router.get("/productsByCompany/:id", (req, res) => {
  models.Trade.findProductsByCompany(models, req.params.id).then(trades => {
    res.send(trades);
  });
});

router.get("/products", (req, res) => {
  models.Product.findAll({}).then(product => {
    res.json(product);
  });
});

router.put("/company/:id", (req, res) => {
  const newCompany = req.body;
  models.Company.update(
      newCompany, {
        where: {
          id: req.params.id
        }
      })
    .then(() => {
      res.json(req.params.id);
    }).catch(error => {
      res.status(500).json({
        error,
        message: "Error in updating company."
      });
    });
});

router.delete("/company/:id", (req, res) => {
  models.User.update({
    company_id: null
  }, {
    where: {
      company_id: req.params.id
    }
  }).then(() => {
    models.Trade.destroy({
      where: {
        company_id: req.params.id
      }
    })
  }).then(() => {
    models.Company.destroy({
      where: {
        id: req.params.id
      }
    }).then(() => {
      res.json({
        message: "Company deleted"
      });
    });
  }).catch(error => {
    res.status(500).json({
      error,
      message: "Error in deleting company."
    });
  });
});

router.get("/company/:id", (req, res) => {
  models.Company.find({
    where: {
      id: req.params.id
    }
  }).then(company => {
    res.json(company);
  });
});

router.get("/country/:id", (req, res) => {
  models.Country.find({
    where: {
      id: req.params.id
    }
  }).then(country => {
    res.json(country);
  });
});

router.get("/product/:id", (req, res) => {
  models.Product.find({
    where: {
      id: req.params.id
    }
  }).then(product => {
    res.json(product);
  });
});
module.exports = router;
