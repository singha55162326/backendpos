const express = require("express");
const postControllers = require("../controllers/customerControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllCustomerss)
.post (checkToken,postControllers.createNewCustomers);
router.route("/deleteCustomers").post(checkToken,postControllers.deleteCustomers);
router.route("/updateCustomers").post(checkToken,postControllers.updateCustomers);
module.exports = router;