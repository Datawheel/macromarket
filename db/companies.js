module.exports = function(sequelize, db) {

  const Company = sequelize.define("Company", {
    name: db.STRING,
    address: db.TEXT,
    city: db.STRING,
    region: db.STRING,
    country_id: db.STRING,
    company_email: db.TEXT,
    phone_number: db.TEXT,
    website: db.STRING,
    profile_image: db.STRING,
    cover_image: db.STRING,
    description: db.TEXT,
    transporter: db.BOOLEAN
  }, {
    hooks: {
      afterCreate: function(company, options) {
        sequelize.query(`SELECT to_tsvector('english', '${company.dataValues.name.replace(/'/g, "''")}')`).then(response => {
          const document = response[0][0].to_tsvector.replace(/'/g, "''");
          const name = company.dataValues.name.replace(/'/g, "''");
          const id = "company" + company.dataValues.id;
          const image = company.dataValues.profile_image;
          sequelize.query("INSERT INTO " + '"Search"' + " (" + '"id"' + "," + '"name",' + '"profile_type",' + '"document",' + '"image"' + ") VALUES ('" + id + "', '" + name + "', 'company','" + document + "', '" + image + "')").then(insert => {
            console.log(insert);
          }).catch(err => {
            console.log(err);
          });

        }).catch(err => {
          console.log(err);
        });
      },
      beforeDestroy: function(company, options) {
        const id = "company" + company.dataValues.id;
        sequelize.query("DELETE FROM" + '"Search"' + "WHERE id='" + id + "'").then(response => {
          return options;
        }).catch(err => {
          console.log(err);
        });
      },
      beforeUpdate: function(company, options) {
        sequelize.query("SELECT to_tsvector('english','" + company.dataValues.name + "')").then(response => {
          const document = response[0][0].to_tsvector.replace(/'/g, "''");
          const name = company.dataValues.name;
          const id = "company" + company.dataValues.id;
          sequelize.query("UPDATE" + '"Search"' + " SET name='" + name + "' , document='" + document + "' WHERE id='" + id + "'").then(insert => {
            return options;
          }).catch(err => {
            console.log(err);
          });

        }).catch(err => {
          console.log(err);
        });
      }
    }
  });

  // Class Methods
  Company.associate = models => {
    Company.belongsTo(models.Country, {
      foreignKey: "country_id"
    });
  };

  return Company;

};
