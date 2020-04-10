const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const passport = require("../config/passport");

// API Routes
router.use("/api", apiRoutes);

//logout the user and re-enter the app
router.route("/logout")
  .get(function(req, res) {
    req.logout();
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
