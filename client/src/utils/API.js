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
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
