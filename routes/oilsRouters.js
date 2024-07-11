const express = require("express");
const postControllers = require("../controllers/oilsControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllOils)
.post (checkToken,postControllers.createNewOils);
router.route("/deleteOils").post(checkToken,postControllers.deleteOils);
router.route("/updateOils").post(checkToken,postControllers.updateOils);
router.route("/:id").get(checkToken,postControllers.getOilsById);

module.exports = router;