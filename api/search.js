module.exports = function(app) {
  const {db} = app.settings;
  // Using the "|" aka "or" operator allows the route to handle the case of
  // a query given or not, i.e. both of the following will work:
  //  - /api/search/all/vietnam
  //  - /api/search/all/
  app.get("/api/search/(:f|:f/:q)", (req, res) => {
    const filter = req.params.f;
    const query = req.params.q;
    // db.Search.search(query, filter).then(results => {
    //   res.json(results);
    // });
    let where = {
      name: {
        $iLike: `${query}%`
      }
    };
    if (filter !== "all") {
      if (filter === "company") {
        where = {
          name: {
            $iLike: `${query}%`
          },
          $or: [
            {profile_type: "company"},
            {profile_type: "connectamericas"}
          ]
        };
      }
      else {
        where = {
          name: {
            $iLike: `${query}%`
          },
          profile_type: filter
        };
      }
    }


    db.Search.findAll({
      limit: 40,
      where
    }).then(results => {
      res.json(results);
    });
  });

};
