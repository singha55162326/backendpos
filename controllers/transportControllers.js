const Transports = require("../models/transports");
const Employees = require("../models/employees");
const Oils = require("../models/oils");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.getAllTransports = async (req, res, next) => {
  try {
    // Fetch all transports including data from joined tables
    let [transports, _] = await Transports.findAll();

    // Send response
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: transports.length,
      status: true,
      transports,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewTransports = async (req, res, next) => {
  try {
    let {
      transport_id,
      id_documents,
      dimention,
      order_id,
      oils_id,
      company,
      statuss,
      employee_id,
      supplier_id,
      car_id,
      user_id,
    } = req.body;

    if (
      id_documents &&
      dimention &&
      order_id &&
      oils_id &&
      company &&
      statuss &&
      employee_id &&
      supplier_id &&
      user_id
    ) {
      // Check if employee exists
      const employeeExists = await Employees.exists(employee_id);
      if (!employeeExists) {
        return res.status(400).json({
          message: "Employee does not exist",
          responseCode: INPUT_NULL,
          status: false,
        });
      }

      // Create a new Transports instance
      let transports = new Transports(
        transport_id,
        id_documents,
        employee_id,
        dimention,
        order_id,
        oils_id,
        company,
        statuss,
        supplier_id,
        car_id,
        user_id
      );

      // Save the transport data
      transports = await transports.save();

      // Send success response
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      // Send input null response if any required field is missing
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

exports.updateTransports = async (req, res, next) => {
  try {
    // Extract transport data from request body
    let {
      transport_id,
      id_documents,
      dimention,
      order_id,
      oils_id,
      company,
      statuss,
      employee_id,
      supplier_id,
      car_id,
      user_id,
    } = req.body;

    if (
      transport_id &&
      id_documents &&
      dimention &&
      order_id &&
      oils_id &&
      company &&
      statuss &&
      employee_id &&
      supplier_id &&
      car_id &&
      user_id
    ) {
      // Check if employee exists
      const employeeExists = await Employees.exists(employee_id);
      if (!employeeExists) {
        return res.status(400).json({
          message: "Employee does not exist",
          responseCode: INPUT_NULL,
          status: false,
        });
      }

      // // Check if oils exist
      // // Assuming there's a similar exists() method in the Oils model
      // const oilsExists = await Oils.exists(oils_id);
      // if (!oilsExists) {
      //     return res.status(400).json({
      //         message: "Oils do not exist",
      //         responseCode: INPUT_NULL,
      //         status: false,
      //     });
      // }

      // Create a new Transports instance
      let transports = new Transports(
        transport_id,
        id_documents,
        employee_id,
        dimention,
        order_id,
        oils_id,
        company,
        statuss,
        supplier_id,
        car_id,
        user_id
      );

      // Update the transport data
      transports = await transports.update();

      // Send success response
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      // Send input null response if any required field is missing
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

exports.deleteTransports = async (req, res, next) => {
  try {
    // Extract transport_id from request body
    let { transport_id } = req.body;
    if (transport_id) {
      // Create a new Transports instance
      let transports = new Transports(transport_id);
      // Delete the transport data
      transports = await transports.delete();
      // Send success response
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
      });
    } else {
      // Send input null response if transport_id is missing
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

exports.findTransById = async (req, res, next) => {
  try {
    // Extract transport_id from request parameters
    let transport_id = req.params.id;
    // Fetch transport data by ID
    let [transports, _] = await Transports.findTransById(transport_id);
    // Send success response with the fetched data
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
      transports,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
