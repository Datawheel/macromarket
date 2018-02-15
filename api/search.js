const Op = require("sequelize").Op;

async function isCompanyActivated(companyId, db) {
  const id = companyId.replace("company", "");
  const company = await db.Company.findOne({where: {id}});
  const {uid} = company;
  const user = await db.users.findOne({where: {id: uid}});
  return user.activated;
}

module.exports = function(app) {
  const {db} = app.settings;
  // Using the "|" aka "or" operator allows the route to handle the case of
  // a query given or not, i.e. both of the following will work:
  //  - /api/search/all/vietnam
  //  - /api/search/all/
  app.get("/api/search/(:f|:f/:q)", async (req, res) => {
    try {
      const filter = req.params.f;
      const query = req.params.q;
      // db.Search.search(query, filter).then(results => {
      //   res.json(results);
      // });
      let where = {
        name: {
          [Op.iLike]: `${query}%`
        }
      };
      if (filter !== "all") {
        if (filter === "company") {
          where = {
            name: {
              [Op.iLike]: `${query}%`
            },
            [Op.or]: [
              {profile_type: "company"},
              {profile_type: "connectamericas"}
            ]
          };
        }
        else {
          where = {
            name: {
              [Op.iLike]: `${query}%`
            },
            profile_type: filter
          };
        }
      }

      const results = await db.Search.findAll({
        limit: 40,
        where
      });

      const resultsWithActivatedFlag = await Promise.all(results.map(async result => {
        if (result.profile_type === "company") {
          return {data: result, activated: await isCompanyActivated(result.id, db)};
        } else {
          return {data: result, activated: true};
        }
      }));

      const filteredResults = resultsWithActivatedFlag.filter(result => result.activated).map(result => result.data);

      res.json(filteredResults);
    } catch(error) {
      res.json(error);
    }
  });
};
