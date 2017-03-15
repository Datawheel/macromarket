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
        Trade.belongsTo(models.Product, {
          foreignKey: "product_id"
        });
      },
      findProducts: function(models, companyId) {
        return Trade.findAll({
          where: {
            company_id: companyId
          },
          include: [models.Product]
        });
      }
    }
  });
  return Trade;
};
