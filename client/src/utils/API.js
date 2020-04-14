import axios from "axios";

export default {
  // Gets all people
  getPeople: function() {
    return axios.get("/api/people");
  },

  getIllness: function() {
    return axios.get("/api/illnesses");
  },

  findAllDataById: function() {
    return axios.get("/api/users/data");
  },

  // Creates new user
  createUser: function(user) {
    return axios.post("/api/users", user);
  },

  authenticateUser: function(user){
    return axios.post("/api/users/login", user); 
  }, 

  checkAuthentication: function(){
    return axios.get("/api/users/login"); 
  },

  logOut: function(){
    return axios.get("/api/users/logout"); 
  },
  
  createPerson: function(person) {
    return axios.post("/api/people", person);
  },

  createIllness: function(illness) {
    return axios.post("/api/illnesses", illness);
  }
  
};
