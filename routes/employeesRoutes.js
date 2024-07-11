const express = require("express");
const postControllers = require("../controllers/employeesContollers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllEmployees)
.post (checkToken,postControllers.createNewEmployees);
router.route("/deleteEmployees").post(checkToken,postControllers.deleteEmployees);
router.route("/updateEmployees").post(checkToken,postControllers.updateEmployees);
module.exports = router;