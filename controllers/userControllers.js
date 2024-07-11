const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const {
  SUCCESS,
  INPUT_NULL
} = require('../config/errorCode');
const {
  MS_SUCCESS,
  MS_INPUT_NULL
} = require('../config/message');
exports.getAllUser = async (req, res, next) => {
  try {

    let [users, _] = await User.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: users.length,
      status: true,
      users
    });
  } catch (error) {
    next(error);
  }
};


exports.createNewUser = async (req, res, next) => {
  try {

    let {
      user_id,
      username,
      role,
      level,
      prasswold,
      CreatedBy
    } = req.body;
    if (username && role && level && prasswold && CreatedBy) {
      const hash = bcrypt.hashSync(prasswold, saltRounds);
      let user = new User(user_id, username,hash, role, level, CreatedBy);
      user = await user.save();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false
      });
    }
  } catch (error) {
    next(error);
  }
};


exports.deleteUser = async (req, res, next) => {
  try {

    let {
      user_id
    } = req.body;
    if (user_id) {
      let user = new User(user_id);
      user = await user.delete();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false
      });
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
}


exports.updateUser = async (req, res, next) => {
  try {

    let {
      user_id,
      username,
      role,
      level,
      prasswold,
      CreatedBy
    } = req.body;
    if (username && role && level && prasswold && CreatedBy) {
      const hash = bcrypt.hashSync(prasswold, saltRounds);
      let user = new User(user_id, username,hash, role, level, CreatedBy);
      user = await user.update();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true
      });
    } else {
      res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false
      });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
}