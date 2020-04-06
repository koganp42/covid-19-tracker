const db = require("../models"); 

module.exports = {
    findAll: function(req, res) {
        db.Illness
            .findAll({})
            .then(dbIllnesses => {
                res.json(dbIllnesses); 
            });
    },

    findById: function(req, res){
        db.Illness  
            .findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(dbIllness=>{
                res.json(dbIllness); 
            })
            .catch(err =>{
                res.status(404).json(err); 
            }); 
            
    },

    create: function(req, res) {
        db.Illness 
            .create(req.body)
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err); 
            }); 
    },

    update: function(req, res){
        db.Illness   
            .update(req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(dbIllness =>{
                res.json(dbIllness)
            })  
            .catch(err=>{
                res.status(404); 
            }); 
    },

    delete: function(req, res){
        db.Illness   
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then( dbIllness=>{
                res.json(dbIllness)
            })
            .catch( err =>{
                res.status(404); 
            }); 
    }
}; 