const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.createOrUpdate)
  .post(userController.fetchOrCreateUser)
  .delete(userController.remove);

module.exports = router;
