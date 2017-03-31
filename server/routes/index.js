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

// Using the "|" aka or operator allows the route to handle the case of
// a query given or not, i.e. both of the following will work:
//  - /api/search/all/vietnam
//  - /api/search/all/
router.get("/search/(:f|:f/:q)", (req, res) => {
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

router.post("/trades", (req, res) => {
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
          res.json(trades);
        }
      });
    } else {
      models.Trade.create(
        trades[i]
      ).then(() => {
        if (++inserted === trades.length) {
          res.json(trades);
        }
      });
    }
  }

});

router.post("/deleteTrades", (req, res) => {
  const trades = req.body
  var inserted = 0;
  for (var i = 0, len = trades.length; i < len; i++) {
    const trade = trades[i];
    models.Trade.destroy({
      where: trade
    }).then(() => {
      if (++inserted === trades.length) {
        res.json(trades);
      }
    });
  }
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
