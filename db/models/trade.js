'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trade = sequelize.define('Trade', {
    trade_flow: DataTypes.ENUM
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
         Trade.hasMany(models.Company);
         Trade.hasMany(models.Country);
         Trade.hasMany(models.Product);
      }
    }
  });
  return Trade;
};
