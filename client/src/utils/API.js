import axios from "axios";

export default {
  // Gets all people
  getPeople: function() {
    return axios.get("/api/people");
  },
  // Gets one person
  getPerson: function(id) {
    return axios.get("/api/people/" + id);
  },
  // Gets all illnesses entries
  getIllnesses: function() {
    return axios.get("/api/illnesses");
  },
  // Gets one illness table entry
  getIllness: function(id) {
    return axios.get("/api/illnesses/" + id);
  },
  // This call currently doesn't work.
  findAllDataById: function() {
    return axios.get("/api/users/data");
  },

  // Creates new user
  createUser: function(user) {
    return axios.post("/api/users", user);
  },
  // Starts an authentication session
  authenticateUser: function(user){
    return axios.post("/api/users/login", user); 
  }, 
  // Checks if the user's authentication session is true.
  checkAuthentication: function(){
    return axios.get("/api/users/login"); 
  },
  // Logs the user out.
  logOut: function(){
    return axios.get("/api/users/logout"); 
  },
  // Creates a new entry on the person table.
  createPerson: function(person) {
    return axios.post("/api/people", person);
  },
  // Creates a new entry on the illnesses table.
  createIllness: function(illness) {
    return axios.post("/api/illnesses", illness);
  },
  // Updates an entry on the person table.
  updatePerson: function(id, person) {
    return axios.put("/api/people/" + id, person);
  },
  // Updates an entry on the illnesses table.
  updateIllness: function(id, illness) {
    return axios.put("/api/illnesses/" + id, illness);
  },
  
};
