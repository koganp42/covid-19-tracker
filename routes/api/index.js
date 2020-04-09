const router = require("express").Router();
const peopleRoutes = require("./people");
const usersRoutes = require("./users"); 
const illnessesRoutes = require("./illnesses"); 


// person routes
router.use("/people", peopleRoutes);
router.use("/users", usersRoutes);
router.use("/illnesses", illnessesRoutes);  


module.exports = router;
