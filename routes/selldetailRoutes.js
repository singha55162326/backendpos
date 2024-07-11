const express = require("express");
const postControllers = require("../controllers/selldetailControllers");
const router = express.Router();
const { checkToken } = require("../util");

router.route("/").post(checkToken, postControllers.reqSaveSellDetail);
module.exports = router;
