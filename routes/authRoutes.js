const express = require("express");
const postControllers = require("../controllers/authControllers");
const router = express.Router();
router
  .route("/")
  .post (postControllers.auth);
  router.route("/login").post(postControllers.login);
module.exports = router;