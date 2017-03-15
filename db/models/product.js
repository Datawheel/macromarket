'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    id_hs92: DataTypes.STRING,
    flickr_link: DataTypes.STRING,
    flickr_author: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Trade.belongsTo(models.User, {foreignKey: 'user_id'});
          Product.hasMany(models.Trade, {foreignKey: 'product_id'});
      }
    },
    timestamps:false
  });
  return Product;
};
