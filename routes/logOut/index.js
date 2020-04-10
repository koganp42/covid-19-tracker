const router = require("express").Router();
// const passport= require("../../config/passport"); 

router.route("/")
    .get(function(req, res) {
        console.log("logging out"); 
        req.logout();
        res.redirect("/"); 
      }); 

module.exports= router; 

