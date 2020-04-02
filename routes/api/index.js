const router = require("express").Router();
const peopleRoutes = require("./people");
const usersRoutes = require("./users"); 

// person routes
router.use("/people", peopleRoutes);
router.use("/users", usersRoutes); 

module.exports = router;
