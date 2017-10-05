const SequelizeSlugify = require("sequelize-slugify");

module.exports = function(sequelize, db) {

  const Company = sequelize.define("Company", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: db.INTEGER
    },
    name: db.STRING,
    slug: {
      type: db.STRING,
      unique: true
    },
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
    transporter: db.BOOLEAN,
    uid: {
      type: db.STRING,
      primaryKey: true,
      references: {model: "users", key: "id"}
    }
  }, {
    hooks: {
      afterCreate: company => {
        sequelize.query(`SELECT to_tsvector('english', '${company.dataValues.name.replace(/'/g, "''")}')`).then(response => {
          const document = response[0][0].to_tsvector.replace(/'/g, "''");
          const name = company.dataValues.name.replace(/'/g, "''");
          const id = `company${company.dataValues.id}`;
          const image = company.dataValues.profile_image;
          sequelize.models.Search.create({
            id, name, profile_type: "company", document, image
          }).then(Search => {
            console.log("Success: New company created.");
          }).catch(err => {
            console.log("Error creating company.", err);
          });
        }).catch(err => {
          console.log(err);
        });
      },
      beforeDestroy: company => {
        const id = `company${company.dataValues.id}`;
        sequelize.models.Search.destroy({
          where: {id}
        }).then(response => {
          console.log(response);
        }).catch(err => {
          console.log(err);
        });
      },
      beforeUpdate: company => {
        sequelize.query(`SELECT to_tsvector('english', '${company.dataValues.name.replace(/'/g, "''")}')`).then(response => {
          const document = response[0][0].to_tsvector.replace(/'/g, "''");
          const name = company.dataValues.name;
          const id = `company${company.dataValues.id}`;
          const image = company.dataValues.profile_image;
          sequelize.models.Search.update(
            {name, document, image},
            {where: {id}}
          ).then(company => console.log(company))
            .catch(err => console.log(err));
        }).catch(err => {
          console.log(err);
        });
      }
    }
  });

  SequelizeSlugify.slugifyModel(Company, {
    source: ["name"],
    suffixSource: ["id"],
    overwrite: true
  });

  // Class Methods
  Company.associate = models => {
    Company.belongsTo(models.Country, {
      foreignKey: "country_id"
    });
  };

  return Company;

};
