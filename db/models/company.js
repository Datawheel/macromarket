'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    phone_number: DataTypes.TEXT,
    website: DataTypes.STRING,
    profile_image: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    description: DataTypes.TEXT,
    transporter: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {}
    },
    hooks: {
      afterCreate: function(company, options) {
        // const document = sequelize.to_tsvector("Try not to become a man of success, but rather try to become a man of value")');
        sequelize.query("SELECT to_tsvector('english','" + company.dataValues.name + "')").then(response => {
          const document = response[0][0].to_tsvector.replace(/'/g, "''");
          const name = company.dataValues.name;
          const id = "company" + company.dataValues.id;
          sequelize.query("INSERT INTO " + '"Search"' + " (" + '"id"' + "," + '"name",' + '"profile_type",' + '"document"' + ") VALUES ('" + id + "', '" + name + "', 'company','" + document + "')").then(insert => {
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
  return Company;
};
