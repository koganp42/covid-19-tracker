const router = require("express").Router();
const usersController = require("../../controller/usersController"); 
const passport= require("../../config/passport"); 

//Matches with "/api/users"
router.route("/")
    //don't know if we should all the get call for the user's infomration
    .get(usersController.findAll)
    .post(usersController.create);

router.route("/login")
    .post(function (req, res, next){
        console.log('routes/users.js, login, req.body: ');
        console.log(req.body); 
        next()
    },
    passport.authenticate("local"), usersController.authenticate)
    .get(function (req, res){
        console.log('routes/users.js, login, req.body: ');
        console.log(req.user); 
        if (req.user){
            console.log("logged in!")
        } else if (!req.user){
            console.log("not logged in")
        }
        res.json(req.user);
    }); 

 //Matches with "/api/users/:id"
router.route("/:id")
    .get(usersController.findById)
    .put(usersController.update)
    .delete(usersController.delete); 

module.exports= router; 