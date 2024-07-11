const express = require("express");
const postControllers = require("../controllers/userControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllUser)
.post (checkToken,postControllers.createNewUser);
router.route("/deleteUser").post(checkToken,postControllers.deleteUser);
router.route("/updateUser").post(checkToken,postControllers.updateUser);
module.exports = router;