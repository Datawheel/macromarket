module.exports = function(sequelize, db) {
  const Trade = sequelize.define("Trade", {
    trade_flow: db.STRING,
    product_id: db.STRING,
    company_id: db.INTEGER,
    country_id: db.INTEGER
  });

  // Class Methods
  Trade.associate = models => {
    Trade.belongsTo(models.Product, {
      foreignKey: "product_id"
    });
    Trade.belongsTo(models.Country, {
      foreignKey: "country_id"
    });
    Trade.belongsTo(models.Company, {
      foreignKey: "company_id"
    });
  };

  return Trade;
};
