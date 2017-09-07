module.exports = function(sequelize, db) {

  return sequelize.define("Product", {
    name: db.STRING,
    description: db.STRING,
    id_hs92: db.STRING,
    flickr_link: db.STRING,
    flickr_author: db.STRING
  }, {
    timestamps: false
  });

};
