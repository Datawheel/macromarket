'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      "Products",
      "flickr_link", {type: Sequelize.STRING}
    ).then(function () {
      return queryInterface.addColumn(
        "Products",
        "flickr_author", {type: Sequelize.STRING}
      )
    });
  },
  down: function (queryInterface) {
    return queryInterface.removeColumn("Products", "flickr_link").then(function () {
      return queryInterface.removeColumn("Products", "flickr_author");
    });
  }
};
