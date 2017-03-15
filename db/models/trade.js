'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trade = sequelize.define('Trade', {
    trade_flow: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    company_id: DataTypes.INTEGER,
    country_id: DataTypes.INTEGER
    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Trade.belongsTo(models.User, {foreignKey: 'user_id'});
      }
    }
  });
  return Trade;
};
