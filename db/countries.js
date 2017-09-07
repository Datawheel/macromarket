module.exports = function(sequelize, db) {

  return sequelize.define("Country", {
    name: db.STRING,
    flickr_link: db.STRING,
    flickr_author: db.STRING,
    id_3char: db.STRING,
    id_2char: db.STRING,
    id_ca: db.STRING,
    continent: db.STRING
  }, {
    timestamps: false
  });

  // Country.associate = models => {
  //   Country.hasMany(models.Trade, {foreignKey: "id"});
  // }

};
