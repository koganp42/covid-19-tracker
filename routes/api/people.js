const router = require("express").Router();
const peopleController = require("../../controller/peopleController"); 

//Matches with "/api/people"
router.route("/")
    .get(peopleController.findAll)
    .post(peopleController.create);


module.exports= router; 