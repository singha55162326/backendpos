const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/sellControllers");
const { checkToken } = require("../util");

// Define routes using router.route()
router
  .route("/")
  .get(checkToken, postControllers.getAllSell)
  .post(checkToken, postControllers.reqSaveSell);

router.route("/max").get(checkToken, postControllers.getMaxIdSell);

router.route("/:id").get(checkToken, postControllers.getSellById);

module.exports = router;
