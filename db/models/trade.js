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
        Trade.belongsTo(models.Country, {
          foreignKey: "country_id"
        });
      },
      findProductsByCompany: function(models, companyId) {
        return Trade.findAll({
          where: {
            company_id: companyId
          },
          include: [models.Product, models.Country]
        });
      }
    }
  });
  return Trade;
};
