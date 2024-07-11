const express = require("express");
const postControllers = require("../controllers/orderControllers");
const router = express.Router();
const { checkToken } = require("../util");

router 
.route("/")
.get (checkToken,postControllers.getAllOrder)
.post (checkToken,postControllers.createOrder);
router.route("/max").get(checkToken,postControllers.getMaxIdOrder);
router.route("/:id").get(checkToken,postControllers.getOrderById);
router.route("/print/:idPrint").get(checkToken,postControllers.PrintorderById);


module.exports = router;