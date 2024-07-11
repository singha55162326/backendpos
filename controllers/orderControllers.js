const Order = require("../models/order");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllOrder = async (req, res, next) => {
  try {
    let [order, _] = await Order.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: order.length,
      status: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};

exports.getMaxIdOrder = async (req, res, next) => {
  try {
    let [order, _] = await Order.findMaxId();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: order.length,
      status: true,
      order,
    });
  } catch (error) {
    next(error);
  }
};


exports.createOrder = async (req, res, next) => {
  try {
    let { orders_id, service, total, company, date, qty, user_id, status_order, supplier_id } = req.body;
    console.log('req.body:', req.body)
    if (service && total && company && date && qty && user_id && status_order && supplier_id) {
      let order = new Order(orders_id, service, total, company, date, qty, user_id, status_order, supplier_id);
      order = await order.save();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false,
      });
    }
  } catch (error) {
    next(error);
  }
};


exports.getOrderById = async (req, res, next) => {
  try {
    let orders_id = req.params.id;
    let [order, _] = await Order.findById(orders_id);
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      order,
     });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.PrintorderById = async (req, res, next) => {
  try {
    let id = req.params.idPrint;
    console.log('id:', id)
    let [order, _] = await Order.orderByIdPrint(id);
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      order,
     });
  } catch (error) {
    console.log(error);
    next(error);
  }
};