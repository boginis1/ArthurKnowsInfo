import axios from "axios";

export default {
  // Gets all books
  postBing: function(searchData) {
    return axios.post("/api/search", searchData);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  verifyToken: function (token) {
    return axios.post("/api/verify", { token }).then((res) => res);
  },
  saveUser (data) {
    return axios.put(`/api/user/${data.userId}`, data);
  },
  getUser(id) {
    return axios.get(`/api/user/${id}`);
  },
  deleteUser (id) {
    return axios.delete(`/api/user/${id}`)
  },
  fetchUserDetailsOrCreate(data) {
    return axios.post(`/api/user/${data.userId}`, data);
  }
};
