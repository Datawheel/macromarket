'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.addColumn(
      "Products",
      "id_hs92", {type: Sequelize.STRING}
    );
    done();
  },

  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn("Products", "id_hs92");
    done();
  }
};
