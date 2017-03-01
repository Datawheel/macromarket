'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn("Products", "createdAt");
    queryInterface.removeColumn("Products", "updatedAt");
    queryInterface.addColumn(
      "Products",
      "id_hs92", {type: Sequelize.STRING}
    );
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn("Products", "id_hs92");
    queryInterface.addColumn(
      "Products",
      "createdAt", {type: Sequelize.TIME}
    );
    queryInterface.addColumn(
      "Products",
      "updatedAt", {type: Sequelize.TIME}
    );
    done();
  }
};
