import axios from "axios";

export default {
  // Gets all people
  getPeople: function() {
    return axios.get("/api/people");
  },
  // Creates new user
  createUser: function(user) {
    return axios.post("/api/users", user);
  },
  // Saves new user's Person table data
  createPerson: function(person) {
    return axios.post("/api/people", person);
  },
  // Saves new user's Illness table data
  createIllness: function(illness) {
    return axios.post("/api/illness", illness);
  }
  
};
