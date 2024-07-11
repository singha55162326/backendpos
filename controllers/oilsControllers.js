const Oils = require("../models/oils");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllOils = async (req, res, next) => {
  try {
    let [oils, _] = await Oils.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: oils.length,
      status: true,
      oils,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewOils = async (req, res, next) => {
  try {
    let { oils_id, oil_name, status, qty, price, user_id, supplier_id } = req.body;
    if (oil_name && price && user_id && supplier_id) {
      let oils = new Oils(oils_id, oil_name, status, qty, price, user_id, supplier_id);
      // console.log('supplier_id', supplier_id)
      // console.log('oil_name', oil_name)
      // console.log('price', price)
      // console.log('status', status)
      // console.log('qty', qty)
      // console.log('user_id', user_id)
      // console.log('oils_id', oils_id)
      // console.log('oils_id',oils_id)
      oils = await oils.save();
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

exports.updateOils = async (req, res, next) => {
  try {
    let { oils_id, oil_name, status, qty, price, user_id, supplier_id } = req.body;
    if (oils_id && oil_name && price && user_id && supplier_id) {
      let oils = new Oils(oils_id, oil_name, status, qty, price, user_id, supplier_id);
      oils = await oils.update();
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

exports.deleteOils = async (req, res, next) => {
  try {
    let { oils_id } = req.body;
    if (oils_id) {
      let oils = new Oils(oils_id);
      oils = await oils.delete();
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



exports.getOilsById = async (req, res, next) => {
  try {
    let supplier_id = req.params.id;
    let [supplier, _] = await Oils.findById(supplier_id);
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      supplier,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

