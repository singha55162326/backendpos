const express = require("express");
const postControllers = require("../controllers/reportControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllOrder)
router.route("/:value").get(checkToken,postControllers.getReport);

module.exports = router;