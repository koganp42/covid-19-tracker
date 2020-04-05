const router = require("express").Router();
const illnessesController = require("../../controller/illnessesController"); 

//Matches with "/api/illnesses"
router.route("/")
    .get(illnessesController.findAll)
    .post(illnessesController.create);

//Matches with "/api/illnesses/:id"
router.route("/:id")
    .get(illnessesController.findById)
    .put(illnessesController.update)
    .delete(illnessesController.delete); 


module.exports= router; 