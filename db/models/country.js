"use strict";
module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define("Country", {
    image: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Country.hasMany(models.Trade, {
          as: "Trades"
        });
        Country.hasMany(models.Company, {
          foreignKey: "country_id"
        });
      }
    }
  });
  return Country;
};
