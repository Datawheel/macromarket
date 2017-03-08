'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable("Search", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      profile_type: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.TEXT
      }
    }, {
      timestamps: false
    });
  },
  down: function(queryInterface) {
    return queryInterface.dropTable("Search");
  }
};
