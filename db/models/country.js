"use strict";
module.exports = function(sequelize, DataTypes) {
  var Country = sequelize.define("Country", {
    name: DataTypes.STRING,
    flickr_link: DataTypes.STRING,
    flickr_author: DataTypes.STRING,
    id_3char: DataTypes.STRING,
    continent: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Country.hasMany(models.Trade, {
        //   as: "Trades"
        // });
        // Country.hasMany(models.Company, {
        //   foreignKey: "country_id"
        // });
      }
    },
      timestamps:false
  });
  return Country;
};
