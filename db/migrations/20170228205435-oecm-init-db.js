"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("Countries", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    }, {timestamps: false}).then(function() {
      return queryInterface.createTable("Companies", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.TEXT
        },
        phone_number: {
          type: Sequelize.TEXT
        },
        website: {
          type: Sequelize.STRING
        },
        profile_image: {
          type: Sequelize.STRING
        },
        cover_image: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.TEXT
        },
        transporter: {
          type: Sequelize.BOOLEAN
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    }).then(function() {
      return queryInterface.createTable("Users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        email: {
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        salt: {
          type: Sequelize.STRING
        },
        image: {
          type: Sequelize.STRING
        },
        company_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies",
            key: "id"
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    }).then(function() {
      return queryInterface.createTable("Products", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        }
      }, {timestamps: false});
    }).then(function() {
      return queryInterface.createTable("Trades", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        trade_flow: {
          type: Sequelize.ENUM("exports", "imports")
        },
        company_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Companies",
            key: "id"
          }
        },
        product_id: {
          type: Sequelize.STRING,
          references: {
            model: "Products",
            key: "id"
          }
        },
        country_id: {
          type: Sequelize.STRING,
          references: {
            model: "Countries",
            key: "id"
          }
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    });
  },
  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.dropTable("users");
    */
    return queryInterface.dropAllTables();
  }
};
