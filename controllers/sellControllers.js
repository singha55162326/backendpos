const Sell = require("../models/sell");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.getMaxIdSell = async (req, res, next) => {
  try {
    let [sell, _] = await Sell.findMaxId();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: sell.length,
      status: true,
      sell,
    });
  } catch (error) {
    next(error);
  }
};
exports.reqSaveSell = async (req, res, next) => {
  try {
    let { sales_id, qty, total, status_sell, cus_id, user_id } = req.body;
    console.log("req.body:", req.body);
    if (qty && total && status_sell && cus_id && user_id) {
      let sell = new Sell(null, qty, total, status_sell, cus_id, user_id);
      sell = await sell.save();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
        sales_id: sell.insertId, // Return the generated sales_id
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

exports.getAllSell = async (req, res, next) => {
  try {
    let [sell, _] = await Sell.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: sell.length,
      status: true,
      sell,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSellById = async (req, res, next) => {
  try {
    let sales_id = req.params.id;
    let [sell, _] = await Sell.sellById(sales_id);
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      sell,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
