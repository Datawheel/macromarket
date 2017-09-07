module.exports = function(app) {
  // const {db} = app.settings;

  app.get("/api/auth/isAuthenticated", (req, res) => {
    if (req.isAuthenticated()) {
      res.json(req.user);
    }
    else {
      res.json({msg: "Not logged in!"});
    }
  });
};
