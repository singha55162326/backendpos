const Suppliers = require("../models/suppliers");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllSuppliers = async (req, res, next) => {
    try {
        let [suppliers, _] = await Suppliers.findAll();
        res.status(200).json({
            message: MS_SUCCESS,
            responseCode: SUCCESS,
            pag: 1,
            per_pag: 10,
            total: suppliers.length,
            status: true,
            suppliers,
        });
    } catch (error) {
        next(error);
    }
};

exports.createNewSuppliers = async (req, res, next) => {
    try {
        let { supplier_id, supplier_name, user_id } = req.body;
        if (supplier_name && user_id) {
            let suppliers = new Suppliers(
                supplier_id,
                supplier_name,
                user_id
            );
            suppliers = await suppliers.save();
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

exports.updateSuppliers = async (req, res, next) => {
    try {
        let { supplier_id, supplier_name, user_id } = req.body;
        if (supplier_id && supplier_name && user_id) {
            let suppliers = new Suppliers(
                supplier_id, supplier_name, user_id
            );
            suppliers = await suppliers.update();
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

exports.deleteSuppliers = async (req, res, next) => {
  try {
    let { supplier_id } = req.body;
    if (supplier_id) {
      let suppliers = new Suppliers(supplier_id);
      suppliers = await suppliers.delete();
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
