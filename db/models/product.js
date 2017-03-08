'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Trade.belongsTo(models.User, {foreignKey: 'user_id'});
      }
    },
    timestamps:false
  });
  return Product;
};
