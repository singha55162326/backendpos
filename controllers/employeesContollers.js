const Employees = require("../models/employees");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employees.findAll();
    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      pag: 1,
      per_pag: 10,
      total: employees.length,
      status: true,
      employees,
    });
  } catch (error) {
    next(error);
  }
};

exports.createNewEmployees = async (req, res, next) => {
  try {
    const { employeename, address, position, phone, user_id } = req.body;
    if (employeename && address && position && phone && user_id) {
      const employees = new Employees(
        null,
        employeename,
        address,
        position,
        phone,
        user_id
      ); // Pass null for auto-generated employee_id
      await employees.save();
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

exports.updateEmployees = async (req, res, next) => {
  try {
    const { employee_id, employeename, address, position, phone, user_id } =
      req.body;
    if (
      employee_id &&
      employeename &&
      address &&
      position &&
      phone &&
      user_id
    ) {
      const employeeExists = await Employees.exists(employee_id);
      if (employeeExists) {
        const employees = new Employees(
          employee_id,
          employeename,
          address,
          position,
          phone,
          user_id
        );
        await employees.update();
        res.status(200).json({
          message: MS_SUCCESS,
          responseCode: SUCCESS,
          status: true,
        });
      } else {
        res.status(404).json({
          message: "Employee not found.",
          responseCode: 404,
          status: false,
        });
      }
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

exports.deleteEmployees = async (req, res, next) => {
  try {
    const { employee_id } = req.body;
    if (employee_id) {
      const employeeExists = await Employees.exists(employee_id);
      if (employeeExists) {
        const employees = new Employees(employee_id);
        await employees.delete();
        res.status(200).json({
          message: MS_SUCCESS,
          responseCode: SUCCESS,
          status: true,
        });
      } else {
        res.status(404).json({
          message: "Employee not found.",
          responseCode: 404,
          status: false,
        });
      }
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
