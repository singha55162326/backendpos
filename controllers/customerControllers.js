const Customers = require("../models/customers");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllCustomerss = async (req, res, next) => {
  try {
    let [customers, _] = await Customers.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: customers.length,
      status: true,
      customers,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewCustomers = async (req, res, next) => {
  try {
    let { cus_id, cus_name, address, contact, status, phone, user_id } =
      req.body;
    if (cus_name && address && contact && status && phone && user_id) {
      let customers = new Customers(
        cus_id,
        cus_name,
        address,
        contact,
        status,
        phone,
        user_id
      );
      customers = await customers.save();
      // console.log('res---', res)
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

exports.updateCustomers = async (req, res, next) => {
  try {
    let { cus_id, cus_name, address, contact, status, phone, user_id } =
      req.body;
    if (
      cus_id &&
      cus_name &&
      address &&
      contact &&
      status &&
      phone &&
      user_id
    ) {
      let customers = new Customers(
        cus_id,
        cus_name,
        address,
        contact,
        status,
        phone,
        user_id
      );
      customers = await customers.update();
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
    console.log(error);
    next(error);
  }
};

exports.deleteCustomers = async (req, res, next) => {
  try {
    let { cus_id } = req.body;
    if (cus_id) {
      let customers = new Customers(cus_id);
      customers = await customers.delete();
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
    console.log(error);
    next(error);
  }
};
