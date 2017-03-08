'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn("Countries", "image");
    queryInterface.addColumn(
      "Countries",
      "flickr_link", {type: Sequelize.STRING}
    );
    queryInterface.addColumn(
      "Countries",
      "flickr_author", {type: Sequelize.STRING}
    );
    queryInterface.addColumn(
      "Countries",
      "id_3char", {type: Sequelize.STRING}
    );
    queryInterface.addColumn(
      "Countries",
      "continent", {type: Sequelize.STRING}
    );
    done();
  },
  down: function (queryInterface, Sequelize, done) {
    queryInterface.removeColumn("Countries", "flickr_link");
    queryInterface.removeColumn("Countries", "flickr_author");
    queryInterface.removeColumn("Countries", "id_3char");
    queryInterface.removeColumn("Countries", "continent");
    queryInterface.addColumn(
      "Countries",
      "image", {type: Sequelize.STRING}
    );
    done();
  }
};
