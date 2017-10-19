const isAuthenticated = require("../api-helpers/authHelpers.js").isAuthenticated;
const Op = require("sequelize").Op;

module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/users/", isAuthenticated, (req, res) => {
    let {days} = req.query;
    let daysAgo = new Date(1318781876406);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    if (days && (/^\d+$/).test(days)) {
      days = parseInt(days, 10);
      daysAgo = new Date(today - new Date(oneDay * days));
      daysAgo.setHours(23, 59, 59);
    }

    db.users.findAll({
      where: {
        createdAt: {
          [Op.lt]: today,
          [Op.gt]: daysAgo
        }
      },
      order: [["createdAt", "DESC"]],
      limit: 100
    })
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });
};
