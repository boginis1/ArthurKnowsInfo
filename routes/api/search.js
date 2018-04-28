const router = require("express").Router();

// Example:
// const booksController = require("../../controllers/booksController");

const searchController = require("../../controllers/searchController");


// Example:
// Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);


// Matches with "api/search"
router.route("/")
    .post(searchController.searchPerson);



// Example:
// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;