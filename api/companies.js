const http = require("https");
const multer = require("multer");
const path = require("path");
const memoryStorage = multer.memoryStorage;
const storage = require("@google-cloud/storage");
const isAuthenticated = require("../api-helpers/authHelpers.js").isAuthenticated;
const Op = require("sequelize").Op;

module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/companies/", (req, res) => {
    let {days} = req.query;
    let daysAgo = new Date(1318781876406);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    if (days && (/^\d+$/).test(days)) {
      days = parseInt(days, 10);
      daysAgo = new Date(today - new Date(oneDay * days));
      daysAgo.setHours(23, 59, 59);
    }

    db.Company.findAll({
      where: {
        createdAt: {
          [Op.lt]: today,
          [Op.gt]: daysAgo
        }
      },
      order: [["createdAt", "DESC"]],
      limit: 100,
      include: [db.Country, db.users]
    })
      .then(companies => res.json(companies))
      .catch(err => res.json(err));
  });

  app.get("/api/companies/byUser/:uid", (req, res) => {
    const {uid} = req.params;
    db.Company.findAll({
      where: {uid},
      include: [db.Country],
      order: [["createdAt", "DESC"]]
    })
    .then(companies => res.json(companies))
    .catch(err => res.json(err));
  });

  // Instantiate a storage client
  const googleCloudStorage = storage({
    projectId: process.env.GCLOUD_STORAGE_BUCKET,
    keyFilename: process.env.GCLOUD_KEY_FILE
  });

  // A bucket is a container for objects (files).
  const gcsBucket = googleCloudStorage.bucket("mm-company");

  // Multer is required to process file uploads and make them available via
  // req.files.
  const upload = multer({
    storage: memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb
    },
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error("Only image files are allowed!"));
      }
      return callback(null, true);
    }
  });

  app.get("/api/companies/:slug", async (req, res) => {
    const {slug} = req.params;
    // const {id: uid} = req.user;
    // console.log("companyid:", id)
    // console.log("req.user:", req.user)

    if (slug === "new") {
      res.json({});
    }
    else if (slug.slice(0, 3) === "ca_") {
      const option = {
        hostname: "m.connectamericas.com",
        path: `/apirest/v6/company/${slug.slice(3, slug.length)}`,
        method: "GET",
        headers: {
          "Accept": "application/json",
          "content-type": "application/json",
          "clientToken": process.env.CA_CLIENT_TOKEN
        }
      };
      const request = response => {
        let result = "";
        // another chunk of data has been recieved, so append it to `str`
        response.on("data", chunk => {
          result += chunk;
        });
        // the whole response has been recieved, so we just print it out here
        response.on("end", () => {
          const err = result ? null : "Not found";
          const json = JSON.parse(result);
          // console.log(result);
          const company = {
            name: json.name,
            website: json.website,
            phone_number: json.phone_number,
            description: json.bussiness_objetives,
            address: json.address + json.address_line2 + json.city + json.country,
            Country: {id:json.country_id, name:json.country},
            profile_image: json.photo_url,
            ca_link: json.public_url,
            catalog: json.catalog
          };
          res.json(company);
        });
      };
      http.request(option, request).end();
    }
    else {
      try {
        const company = await db.Company.findOne({
          // where: {id, uid},
          where: {slug},
          include: [db.Country]
        });
        const user = await db.users.findOne({where:{id: company.uid}});
        const result = user.activated ? company : "Not found";
        res.json(result);
      } catch (error) {
        res.json(error);
      }
    }
  });

  app.delete("/api/companies/:id/:imgType", isAuthenticated, (req, res) => {
    const {id, imgType} = req.params;
    const {file: filename} = req.query;
    db.Company.findOne({
      where: {id}
    }).then(company => {
      if (!company) {
        return res.json({error: "Company not found."});
      }
      if (company.uid !== req.user.id) {
        return res.json({error: "You do not have permission to edit this company."});
      }
      if (company[`${imgType}_image`].replace("https://storage.googleapis.com/mm-company/", "") !== filename) {
        return res.json({error: "You do not have permission to delete this image."});
      }
      const file = gcsBucket.file(filename);
      file.delete().then(() => {
        company.update({
          [`${imgType}_image`]: null
        }).then(() =>
          res.json({
            deleted: true,
            query: req.query
          })
        );
      })
      .catch(err => res.json({error: "File doesn't exist", resp: err}));
    })
    .catch(err => res.json(err));
  });

  /** POST /:id - Uploads new image to google storage and updates DB
  REQUIRED:
    - id (req.params.id)
    - file (req.file)
    - imgType (req.query.imgType)
    /api/companies/1/image?imgType=profile|cover
  */
  const imgUpload = upload.single("image");
  app.post("/api/companies/:id/:imgType", isAuthenticated, (req, res) => {
    const {id, imgType} = req.params;
    db.Company.findOne({
      where: {id}
    }).then(company => {
      if (!company) {
        return res.json({error: "Company not found."});
      }
      if (company.uid !== req.user.id) {
        return res.json({error: "You do not have permission to edit this company."});
      }
      imgUpload(req, res, err => {
        if (err) return res.json({error: err});

        if (!req.file) {
          return res.json({error: "No file."});
        }

        // Create a new blob in the bucket and upload the file data.
        const fname = path.parse(req.file.originalname).name.replace(/\W+/g, "-").toLowerCase();
        const extension = path.parse(req.file.originalname).ext.toLowerCase();
        const fileName = `company/company${id}-${fname}${extension}`;
        const fileTest = gcsBucket.file(fileName);

        fileTest.exists().then(data => {
          const exists = data[0];
          // console.log("exists?", exists);
          // res.json({});

          const blob = gcsBucket.file(fileName);

          // Make sure to set the contentType metadata for the browser to be able
          // to render the image instead of downloading the file (default behavior)
          const blobStream = blob.createWriteStream({
            metadata: {
              contentType: req.file.mimetype
            }
          });

          blobStream.on("error", err => {
            console.log("blobStream error\n\n");
            console.log(err);
          });

          blobStream.on("finish", () => {
            // The public URL can be used to directly access the file via HTTP.
            const publicUrl = `https://storage.googleapis.com/${gcsBucket.name}/${blob.name}`;

            // Make the image public to the web (since we'll be displaying it in browser)
            blob.makePublic().then(() => {
              company.update({
                [`${imgType}_image`]: publicUrl
              }).then(() =>
                res.json({
                  msg: `Success! Image uploaded to ${publicUrl}`,
                  file: publicUrl
                })
              );
            });
          });

          blobStream.end(req.file.buffer);
        });

      });
    })
    .catch(err => res.json(err));
  });

  /** POST / - Create a new entity */
  app.post("/api/companies", isAuthenticated, (req, res) => {
    const {id: uid} = req.user;
    const {body: company} = req;
    company.uid = uid;
    db.Company.create(company).then(company => {
      res.json(company);
    }).catch(error => {
      res.status(500).json({
        error,
        message: "Error in creating company."
      });
    });
  });

  /** GET /:id - Return a given entity */

  /** PUT /:id - Updates a given entity */
  app.put("/api/companies/:id", isAuthenticated, (req, res) => {
    const {id} = req.params;
    db.Company.update(
      req.body,
      {where: {id, uid: req.user.id}, individualHooks: true}
    ).then(company => res.json(company))
      .catch(err => res.json({error: "Unable to edit this company.", errorResp: err}));
  });

  /** DELETE /:id - Deletes a given entity
      WARNING: when deleting a company should also:
        - ensure user has the proper permissions
        - delete any trades associated with this company
  */
  app.delete("/api/companies/:id", isAuthenticated, (req, res) => {
    const {id} = req.params;
    db.Company.findOne({
      where: {id}
    }).then(company => {
      if (!company) {
        return res.json({error: "Company not found."});
      }
      if (company.uid !== req.user.id) {
        return res.json({error: "You do not have permission to delete this company."});
      }
      return company.destroy().then(() =>
        res.json({
          deleted: true,
          query: req.query
        })
      )
      .catch(err => res.json({error: "Unable to delete company.", resp: err}));
    })
    .catch(err => res.json(err));
  });
};
