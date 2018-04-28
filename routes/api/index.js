const router = require("express").Router();

// Example:
// const bookRoutes = require("./books");

const searchRoutes = require("./search.js");
const userRoutes = require('./user');

// Example:
// // Book routes
// router.use("/books", bookRoutes);

// Search routes
router.use("/search", searchRoutes);
router.use('/user', userRoutes);

module.exports = router;
