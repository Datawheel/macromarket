'use strict';
module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define('Country', {
    image: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Country.belongsToMany(models.Trade);
        // Country.belongsToMany(models.User);
      }
    }
  });
  return Country;
};
