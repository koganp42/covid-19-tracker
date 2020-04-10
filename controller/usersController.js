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

    authenticate: function(req, res){
        console.log(req.user); 
        res.json(req.user); 
    },

    checkAuthentication: function (req, res){
        console.log(req.user); 
        if (req.user){
            console.log("logged in!")
        } else if (!req.user){
            console.log("not logged in")
        }
        res.json(req.user);
    },

    logOut: function(req, res) {
        console.log("logging out"); 
        req.logout();
        res.redirect("/"); 
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
    },

    update: function(req, res){
        db.User   
            .update(req.body,
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
            .then(dbUser =>{
                res.json(dbUser)
            })  
            .catch(err=>{
                res.status(404); 
            }); 
    },

    delete: function(req, res){
        db.User   
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then( dbUser=>{
                res.json(dbUser)
            })
            .catch( err =>{
                res.status(404); 
            }); 
    }
}; 