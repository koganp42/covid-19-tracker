const db = require("../models"); 

module.exports = {
    findAll: function(req, res) {
        db.User
            .findAll({})
            .then(function(dbUsers) {
                res.json(dbUsers); 
            });
    },

    //change the id to be retrieved internally so that can't access other user's accounts
    findById: function(req, res){
        db.User  
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbUser=>{
                res.json(dbUser); 
            })
            .catch(err =>{
                res.status(404).json(err); 
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