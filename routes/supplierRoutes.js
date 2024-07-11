const express = require("express");
const postControllers = require("../controllers/suppliersControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllSuppliers)
.post (checkToken,postControllers.createNewSuppliers);
router.route("/deleteSuppliers").post(checkToken,postControllers.deleteSuppliers);
router.route("/updateSuppliers").post(checkToken,postControllers.updateSuppliers);
module.exports = router;