const Categories = require("../models/categories");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllCategories = async (req, res, next) => {
  try {
    let [categories, _] = await Categories.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: categories.length,
      status: true,
      categories,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewCategories = async (req, res, next) => {
  try {
    let { oil_type, oil_typename, user_id } = req.body;
    if (oil_typename && user_id) {
      let categories = new Categories(oil_type, oil_typename, user_id);
      categories = await categories.save();
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

exports.updateCategories = async (req, res, next) => {
  try {
    let { oil_type, oil_typename, user_id } = req.body;
    if (oil_typename && user_id && oil_type) {
      let categories = new Categories(oil_type, oil_typename, user_id);
      categories = await categories.update();
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

exports.deleteCategories = async (req, res, next) => {
  try {
    let { oil_type } = req.body;
    if (oil_type) {
      let categories = new Categories(oil_type);
      categories = await categories.delete();
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
