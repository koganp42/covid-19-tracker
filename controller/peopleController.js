const db = require("../models"); 

module.exports = {
    findAll: function(req, res) {
        db.Person
            .findAll({})
            .then(dbPeople => {
                res.json(dbPeople); 
            });
    },

    findById: function(req, res){
        db.Person  
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbPerson=>{
                res.json(dbPerson); 
            })
            .catch(err =>{
                res.status(404).json(err); 
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
    },

    update: function(req, res){
        db.Person   
            .update(req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(dbPerson =>{
                res.json(dbPerson)
            })  
            .catch(err=>{
                res.status(404); 
            }); 
    },

    delete: function(req, res){
        db.Person   
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then( dbPerson=>{
                res.json(dbPerson)
            })
            .catch( err =>{
                res.status(404); 
            }); 
    }
}; 