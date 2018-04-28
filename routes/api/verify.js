const router = require("express").Router();
const verifyServices = require("../../utility/services");

router.route("/")
  .post(verifyServices.verify);


module.exports = router;