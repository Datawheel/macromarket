"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Companies",
      "user_id", {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      }
    ).then(function() {
      return queryInterface.addColumn(
        "Companies",
        "trades", {
          type: Sequelize.INTEGER,
          references: {
            model: "Trades",
            key: "id"
          }
        }
      )
    })
    .then(function() {
      return queryInterface.addColumn(
        "Companies",
        "country_id", {
          type: Sequelize.STRING,
          references: {
            model: "Countries",
            key: "id"
          }
        }
      )
    })
    .then(function() {
      return queryInterface.addColumn(
        "Countries",
        "trades", {
          type: Sequelize.INTEGER,
          references: {
            model: "Trades",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Countries",
        "companies", {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Products",
        "trades", {
          type: Sequelize.INTEGER,
          references: {
            model: "Trades",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Trades",
        "companies", {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Trades",
        "countries", {
          type: Sequelize.STRING,
          references: {
            model: "Countries",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Trades",
        "products", {
          type: Sequelize.STRING,
          references: {
            model: "Products",
            key: "id"
          }
        }
      )
    }).then(function() {
      return queryInterface.addColumn(
        "Users",
        "company_id", {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies",
            key: "id"
          }
        }
      )
    })

  },

  down: function(queryInterface, Sequelize) {

  }
};
