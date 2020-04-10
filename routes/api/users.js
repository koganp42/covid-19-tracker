const router = require("express").Router();
const usersController = require("../../controller/usersController"); 
const passport= require("../../config/passport"); 
const isAuthenticated = require("../../config/middleware/isAuthenticated");

//Matches with "/api/users"
router.route("/")
    //don't know if we should all the get call for the user's infomration
    .get(isAuthenticated, usersController.findAll)
    .post(usersController.create);

router.route("/login")
    .post(passport.authenticate("local"), usersController.authenticate)
    .get(usersController.checkAuthentication); 

 //Matches with "/api/users/:id"
router.route("/:id")
    .get(isAuthenticated, usersController.findById)
    .put(isAuthenticated, usersController.update)
    .delete(isAuthenticated, usersController.delete); 

module.exports= router; 