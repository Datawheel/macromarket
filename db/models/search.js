'use strict';
module.exports = function(sequelize, DataTypes) {
  var Search = sequelize.define('Search', {
    name: DataTypes.STRING,
    profile_type: DataTypes.STRING,
    document: DataTypes.STRING
  }, {
    classMethods: {
      search: function(query, filter) {
        if (sequelize.options.dialect !== 'postgres') {
          console.log('Search is only implemented on POSTGRES database');
          return;
        }
        var Search = this;
        if (filter !==  "all") {
          var filterByProfileType = " AND profile_type='" + filter + "'";
        }
        else {
          var filterByProfileType = "";
        }
        console.log(filterByProfileType, "ddddddddd");
        // query = sequelize.getQueryInterface().escape(query+":*");
        return sequelize
          .query('SELECT * FROM "' + Search.tableName +
            '" WHERE document @@ plainto_tsquery(:query)' + filterByProfileType, {
              replacements: {
                query: query+":*"
              },
              model: Search,
              type: sequelize.QueryTypes.SELECT
            });
      }
    },
    timestamps: false,
    tableName: "Search"
  });
  return Search;
};
