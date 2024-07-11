const express = require("express");
const postControllers = require("../controllers/importControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
// .get (checkToken,postControllers.getAllOrder)
.post (checkToken,postControllers.createImport);
router.route("/max").get(checkToken,postControllers.getMaxIdImport);
router.route("/:id").get(checkToken,postControllers.getImportById);

module.exports = router;