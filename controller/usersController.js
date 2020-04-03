const db = require("../models"); 

module.exports = {
    findAll: function(req, res) {
        db.User
            .findAll({})
            .then(function(dbUsers) {
                res.json(dbPeople); 
            });
    },

    create: function(req, res) {
        console.log(req.body); 
        db.User
            .create(req.body)
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err); 
            }); 
    }
}; 