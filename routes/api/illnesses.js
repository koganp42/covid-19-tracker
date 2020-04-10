const router = require("express").Router();
const illnessesController = require("../../controller/illnessesController"); 
const isAuthenticated = require("../../config/middleware/isAuthenticated");

//Matches with "/api/illnesses"
router.route("/")
    .get(isAuthenticated, illnessesController.findAll)
    //add in authorization
    .post(illnessesController.create);

//Matches with "/api/illnesses/:id"
router.route("/:id")
    .get(isAuthenticated, illnessesController.findById)
    .put(isAuthenticated, illnessesController.update)
    .delete(isAuthenticated, illnessesController.delete); 


module.exports= router; 