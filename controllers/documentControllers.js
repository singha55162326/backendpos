const Documents = require("../models/documents");
const UpdateSell = require("../models/updateSell");

const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");
exports.getAllDocuments = async (req, res, next) => {
  try {
    let [documents, _] = await Documents.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: documents.length,
      status: true,
      documents,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewDocuments = async (req, res, next) => {
  try {
    let {
      id_documents,
      address,
      order_id,
      contact,
      traid,
      date,
      company,
      dimention,
      phone,
      service,
      price,
      user_id,
    } = req.body;
    console.log("-------sss------", req.body);
    if (
      address &&
      order_id &&
      contact &&
      traid &&
      date &&
      company &&
      dimention &&
      phone &&
      service &&
      price &&
      user_id
    ) {
      let documents = new Documents(
        id_documents,
        address,
        order_id,
        contact,
        traid,
        date,
        company,
        dimention,
        phone,
        service,
        price,
        user_id
      );
      documents = await documents.save();

      let updateSell = new UpdateSell(order_id);
      updateSell = await updateSell.update();

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

exports.updateDocuments = async (req, res, next) => {
  try {
    let {
      id_documents,
      address,
      order_id,
      contact,
      traid,
      date,
      company,
      dimention,
      phone,
      service,
      price,
      user_id,
    } = req.body;
    if (
      id_documents &&
      address &&
      order_id &&
      contact &&
      traid &&
      date &&
      company &&
      dimention &&
      phone &&
      service &&
      price &&
      user_id
    ) {
      let documents = new Documents(
        id_documents,
        address,
        order_id,
        contact,
        traid,
        date,
        company,
        dimention,
        phone,
        service,
        price,
        user_id
      );
      documents = await documents.update();
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

exports.deleteDocuments = async (req, res, next) => {
  try {
    let { id_documents } = req.body;
    if (id_documents) {
      let documents = new Documents(id_documents);
      documents = await documents.delete();
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

exports.getDocById = async (req, res, next) => {
  try {
    let id_documents = req.params.id;
    let [documents, _] = await Documents.findDocById(id_documents);
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      documents,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
