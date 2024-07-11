const express = require("express");
const postControllers = require("../controllers/carControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllCars)
.post (checkToken,postControllers.createNewCars);
router.route("/deleteCars").post(checkToken,postControllers.deleteCars);
router.route("/updateCars").post(checkToken,postControllers.updateCars);
module.exports = router;