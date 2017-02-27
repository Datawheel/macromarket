var aws = require("aws-sdk")
var express = require("express")
var multer = require("multer")
var multerS3 = require("multer-s3")

aws.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});
module.exports = router => {
  const s3 = new aws.S3();

  const upload = multer({
    storage: multerS3({
      s3,
      bucket: "sabrina-test",
      acl: "public-read",
      contentType: multerS3.AUTO_CONTENT_TYPE,
      metadata: function(req, file, cb) {
        cb(null, {
          fieldName: file.fieldname
        });
      },
      key: function(req, file, cb) {
        let extension = "";
        switch (file.mimetype) {
          case "image/png":
            extension = ".png";
            break;
          case "image/jpeg":
            extension = ".jpg";
            break;
          default:
            extension = "";
        }
        const key = Date.now().toString() + extension;
        cb(null, key);
      }
    })
  });

  router.post("/upload", upload.fields([{
    name: "profile_pic"
  }, {
    name: "cover_pic"
  }]), function(req, res) {
    let imageUrls = {
      profile: null,
      cover: null
    };

    if (req.files.profile_pic) {
      imageUrls.profile = req.files.profile_pic[0].location;
    }
    if (req.files.cover_pic) {
      imageUrls.cover = req.files.cover_pic[0].location;
    }

    res.send(imageUrls);

  });
};
