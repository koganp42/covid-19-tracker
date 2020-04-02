const db = require("../models"); 

module.exports = {
    findAll: function(req, res) {
        db.Person
            .findAll({})
            .then(function(dbPeople) {
                res.json(dbPeople); 
            });
    },

    create: function(req, res) {
        db.Person 
            .create(req.body)
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err); 
            }); 
    }
}; 