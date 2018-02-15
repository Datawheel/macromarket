const Client = require('uptime-robot');
const cl = new Client(process.env.UPTIME_API_KEY);

module.exports = function(app) {

  app.get("/api/uptime", (req, res) => {
    cl.getMonitors({
      customUptimeRatio: [1, 7, 30],
      responseTimes: "1"

    }, function(err, data) {
      if (err) throw err;

      data.forEach(function(site) {
        const responsetimeFormatted = [];
        let total = 0;
        site.responsetime.forEach(function(response) {
          const value = parseFloat(response.value);
          total += value;

          responsetimeFormatted.push({
            id: site.friendlyname,
            x: response.datetime,
            y: value
          });
          site.averageResponseTime = (total / site.responsetime.length);
          site.responsetime = responsetimeFormatted;
        })
      });
       res.json(data);
    });
  });
};
