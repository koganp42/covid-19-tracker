const router = require("express").Router();
const peopleController = require("../../controller/peopleController"); 
const isAuthenticated = require("../../config/middleware/isAuthenticated");

//Matches with "/api/people"
router.route("/")
    .get(isAuthenticated, peopleController.findAll)
    //add in authenication here once set up is finished
    .post(peopleController.create);

//Matches with "/api/people/:id"
router.route("/:id")
    .get(isAuthenticated, peopleController.findById)
    .put(isAuthenticated, peopleController.update)
    .delete(isAuthenticated, peopleController.delete); 


module.exports= router; 