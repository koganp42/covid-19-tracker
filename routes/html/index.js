const router = require("express").Router();
const path = require("path");


router.use("/authenticated", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/app.html"));
  });

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/authentication.html"));
  });

module.exports = router;
