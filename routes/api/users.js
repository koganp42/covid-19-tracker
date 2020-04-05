const router = require("express").Router();
const usersController = require("../../controller/usersController"); 

//Matches with "/api/users"
router.route("/")
    //don't know if we should all the get call for the user's infomration
    .get(usersController.findAll)
    .post(usersController.create);

 //Matches with "/api/users/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.delete); 

module.exports= router; 