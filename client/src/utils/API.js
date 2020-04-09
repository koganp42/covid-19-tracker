import axios from "axios";

export default {
  // Gets all people
  getPeople: function() {
    return axios.get("/api/people");
  },
  // Gets the book with the given id
  createUser: function(user) {
    return axios.post("/api/users", user);
  },

  authenticateUser: function(user){
    return axios.post("/api/users/login", user); 
  }, 

  checkAuthentication: function(){
    return axios.get("/api/users/login"); 
  },
  
  createPerson: function(person) {
    return axios.post("/api/people", person);
  }
};
