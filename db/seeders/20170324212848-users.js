'use strict';
var bcrypt = require("bcrypt-nodejs");

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const password = "123";
    const salt = bcrypt.genSaltSync(10);

    const oec_users = [{
        email: "sabrina@gmail.com",
        password: bcrypt.hashSync(password, salt),
        salt: salt,
        company_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        email: "alex@gmail.com",
        password: bcrypt.hashSync(password, salt),
        salt: salt,
        company_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "charlie@gmail.com",
        password: bcrypt.hashSync(password, salt),
        salt: salt,
        company_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    return queryInterface.bulkInsert("Users", oec_users, {});
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Companies", null, {});
  }
};
