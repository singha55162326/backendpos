const express = require("express");
const postControllers = require("../controllers/orderdetailControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.post (checkToken,postControllers.reqSaveOrderDetail);
module.exports = router;