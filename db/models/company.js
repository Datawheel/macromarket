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
      associate: function(models) {
        // associations can be defined here
        //Company.belongsTo(models.User, {foreignKey: 'user_id'});
      }
    }
  });
  return Company;
};
