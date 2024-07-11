const express = require("express");
const postControllers = require("../controllers/importdetailControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.post (checkToken,postControllers.reqSaveImportDetail);
module.exports = router;