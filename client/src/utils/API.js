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
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Saves a user to the database
  savePerson: function(personData) {
    return axios.post("/api/people", personData);
  },
  // Saves a user to the database
  saveIllness: function(illnessData) {
    return axios.post("/api/illness", illnessData);
  }
};
