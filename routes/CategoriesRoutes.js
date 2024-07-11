const express = require("express");
const postControllers = require("../controllers/categorieControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllCategories)
.post (checkToken,postControllers.createNewCategories);
router.route("/deleteCategories").post(checkToken,postControllers.deleteCategories);
router.route("/updateCategories").post(checkToken,postControllers.updateCategories);
module.exports = router;