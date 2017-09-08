const http = require("https");
const multer = require("multer");
const memoryStorage = multer.memoryStorage;
const storage = require("@google-cloud/storage");

module.exports = function(app) {
  const {db} = app.settings;

  app.get("/api/companies/", (req, res) => {
    db.Company.findAll({limit: 100}).then(companies => res.json(companies));
  });

  app.get("/api/companies/byUser/:uid", (req, res) => {
    const {uid} = req.params;
    db.Company.findAll({
      where: {uid}
    }).then(companies => res.json(companies));
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

  app.get("/api/companies/:id", (req, res) => {
    const {id} = req.params;
    if (id === "new") {
      res.json({})
    }
    else if (id.slice(0, 3) === "ca_") {
      const option = {
        hostname: "m.connectamericas.com",
        path: `/apirest/v6/company/${id.slice(3, id.length)}`,
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
          console.log(result);
          const company = {
            name: json.name,
            website: json.website,
            phone_number: json.phone_number,
            description: json.bussiness_objetives,
            address: json.address + json.address_line2 + json.city + json.country,
            profile_image: json.photo_url
          };
          res.json(company);
        });
      };
      http.request(option, request).end();
    }
    else {
      db.Company.findOne({
        where: {id},
        include: [db.Country]
      }).then(company => {
        const err = company ? null : "Not found";
        // const imgs = [];
        //
        // if (company.profile_image) {
        //   // check if image is not from aws
        //   if (company.profile_image.slice(0, 4) !== "http") {
        //     imgs.push("profile_image");
        //   }
        // }
        // if (company.cover_image) {
        //   // check if image is not from aws
        //   if (company.cover_image.slice(0, 4) !== "http") {
        //     imgs.push("cover_image");
        //   }
        // }
        //
        // if (imgs.length > 0) {
        //   imgs.forEach(img => {
        //     const today = new Date();
        //     const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
        //     const config = {
        //       action: "read",
        //       expires: tomorrow
        //     };
        //     const gcsBucket = googleCloudStorage.bucket("mm-company");
        //     const file = gcsBucket.file(company[img]);
        //     file.getSignedUrl(config, (err, url) => {
        //       if (err) {
        //         console.error(err);
        //         return;
        //       }
        //       company[img] = url;
        //     });
        //   });
        // }

        res.json(company);
      });
    }
  });

  /** POST /:id - Uploads new image to google storage and updates DB
  REQUIRED:
    - id (req.params.id)
    - file (req.file)
    - imgType (req.query.imgType)
    /api/companies/1/image?imgType=profile|cover
  */
  const imgUpload = upload.single("image");
  app.post("/:id/image", (req, res) => {
    imgUpload(req, res, err => {
      if (err) return res.json({error: err});

      if (!req.file) {
        return res.json({error: "No file."});
      }

      const id = req.params.id;
      const imgType = req.query.type || "profile";

      // Create a new blob in the bucket and upload the file data.
      const fileName = `company/${req.file.originalname}`;
      const blob = gcsBucket.file(fileName);

      // Make sure to set the contentType metadata for the browser to be able
      // to render the image instead of downloading the file (default behavior)
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
      });

      // Set configuration for getting publicUrl
      const today = new Date();
      const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
      const config = {
        action: "read",
        expires: tomorrow
      };

      blobStream.on("error", err => {
        console.log("blobStream error\n\n");
        console.log(err);
        db.Search.update({image: fileName}, {
          where: {
            id: `company${id}`
          }
        }).then(() => {
          blob.getSignedUrl(config, (err, url) => {
            if (err) {
              console.error("Error receiving Signed URL", err);
              res.json({error: err});
            }
            res.json({url});
          });
        });
      });

      blobStream.on("finish", () => {
        // // The public URL can be used to directly access the file via HTTP.
        // const publicUrl = `https://storage.googleapis.com/${gcsBucket.name}/${blob.name}`;
        //
        // // Make the image public to the web (since we'll be displaying it in browser)
        // blob.makePublic().then(() => {
        //   res.status(200).send(`Success!\n Image uploaded to ${publicUrl}`);
        // });
        db.Company.update({
          [`${imgType}_image`]: fileName
        }, {
          where: {id}
        }).then(() =>

          db.Search.update({image: fileName}, {
            where: {
              id: `company${id}`
            }
          }).then(() => {
            blob.getSignedUrl(config, (err, url) => {
              if (err) {
                console.error("Error receiving Signed URL", err);
                return;
              }
              res.json({url});
            });
          })

        );
      });

      blobStream.end(req.file.buffer);
    });

  });

  /** POST / - Create a new entity */
  app.post("/api/companies", (req, res) => {
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
  app.put("/api/companies/:id", (req, res) => {
    const {id} = req.params;
    db.Company.update(
      req.body,
      {where: {id}}
    ).then(company => res.json(company))
      .catch(err => res.json(err));
  });

  /** DELETE /:id - Deletes a given entity
      WARNING: when deleting a company this will also:
        - set the user's associated company to NULL
        - delete any trades associated with this company
  */
};
