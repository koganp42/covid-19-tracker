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

  createPerson: function(person) {
    return axios.post("/api/people", person);
  },




  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
