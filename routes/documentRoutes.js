const express = require("express");
const postControllers = require("../controllers/documentControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllDocuments)
.post (checkToken,postControllers.createNewDocuments);
router.route("/deleteDocuments").post(checkToken,postControllers.deleteDocuments);
router.route("/updateDocuments").post(checkToken,postControllers.updateDocuments);
router.route("/:id").get(checkToken,postControllers.getDocById);

module.exports = router;