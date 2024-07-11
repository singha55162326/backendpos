const Cars = require("../models/car");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllCars = async (req, res, next) => {
  try {
    let [cars, _] = await Cars.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: cars.length,
      status: true,
      cars,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewCars = async (req, res, next) => {
  try {
    let { car_id, car_name, dimention, user_id } = req.body;
    if (car_name && dimention && user_id) {
      let cars = new Cars(car_id, car_name, dimention, user_id);
      cars = await cars.save();
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

exports.updateCars = async (req, res, next) => {
  try {
    let { car_id, car_name, dimention, user_id } = req.body;
    if (car_name && dimention && user_id && car_id) {
      let cars = new Cars(car_id, car_name, dimention, user_id);
      cars = await cars.update();
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

exports.deleteCars = async (req, res, next) => {
  try {
    let { car_id } = req.body;
    if (car_id) {
      let cars = new Cars(car_id);
      cars = await cars.delete();
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
