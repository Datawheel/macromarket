'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trade = sequelize.define('Trade', {
    trade_flow: DataTypes.STRING
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
