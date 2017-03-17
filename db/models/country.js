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
        Country.hasMany(models.Trade, {foreignKey: 'country_id'});
      }
    },
      timestamps:false
  });
  return Country;
};
