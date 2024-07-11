const db = require("../config/db");

class Employee {
  static async exists(employee_id) {
    const [result, _] = await db.execute(
      "SELECT * FROM tb_employees   WHERE employee_id = ?",
      [employee_id]
    );
    return result.length > 0;
  }

  constructor(employee_id, employeename, address, position, phone, user_id) {
    this.employee_id = employee_id;
    this.employeename = employeename;
    this.address = address;
    this.position = position;
    this.phone = phone;
    this.user_id = user_id;
  }

  async save() {
    try {
      let sql = `INSERT INTO tb_employees(employeename, address, position, phone, createdAt, updatedAt, user_id)
                 VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, ?)`;
      const result = await db.execute(sql, [
        this.employeename,
        this.address,
        this.position,
        this.phone,
        this.user_id,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async delete() {
    try {
      let sql = `DELETE FROM tb_employees WHERE employee_id = ?`;
      const result = await db.execute(sql, [this.employee_id]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update() {
    try {
      let sql = `UPDATE tb_employees
                 SET employeename = ?, address = ?, position = ?, phone = ?, user_id = ?
                 WHERE employee_id = ?`;
      const result = await db.execute(sql, [
        this.employeename,
        this.address,
        this.position,
        this.phone,
        this.user_id,
        this.employee_id,
      ]);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async findAll() {
    try {
      let sql =
        "SELECT * FROM tb_employees te INNER JOIN tb_users tu ON te.user_id = tu.user_id";
      const [rows, fields] = await db.execute(sql);
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Employee;
