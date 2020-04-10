const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const logOut = require("./logOut"); 
const passport = require("../config/passport");

// API Routes
router.use("/api", apiRoutes);

//logout the user and re-enter the app
// router.use("/logout", logOut); 

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
