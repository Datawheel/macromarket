module.exports = function(sequelize, db) {
  return sequelize.define("Search", {
    name: db.STRING,
    profile_type: db.STRING,
    image: db.STRING,
    document: db.STRING
  }, {
    classMethods: {
      search: (query, filter) => {
        if (sequelize.options.dialect !== "postgres") {
          console.log("Search is only implemented on POSTGRES database");
          return;
        }

        let filterByProfileType;
        if (filter !==  "all") {
          filterByProfileType = " AND profile_type='" + filter + "'";
        }
        else {
          filterByProfileType = "";
        }

        // query = sequelize.getQueryInterface().escape(query+":*");
        return sequelize
          .query('SELECT * FROM "' + Search.tableName +
            '" WHERE document @@ plainto_tsquery(:query)' + filterByProfileType, {
              replacements: {
                query: query + ":*"
              },
              model: Search,
              type: sequelize.QueryTypes.SELECT
            });
      }
    },
    timestamps: false,
    tableName: "Search"
  });
};
