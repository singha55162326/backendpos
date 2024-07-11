const db = require("../config/db");

class Transports {
  constructor(
    transport_id,
    id_documents,
    employee_id,
    dimention,
    order_id,
    oils_id,
    company,
    statuss = "Scheduled", // Default value for status
    supplier_id,
    car_id,
    user_id
  ) {
    this.transport_id = transport_id;
    this.id_documents = id_documents;
    this.dimention = dimention;
    this.order_id = order_id;
    this.employee_id = employee_id;
    this.oils_id = oils_id;
    this.company = company;
    this.statuss = statuss;
    this.supplier_id = supplier_id;
    this.car_id = car_id;
    this.user_id = user_id;
  }

  async save() {
    try {
      // Check if employee exists
      const employeeExists = await this.checkEmployeeExists();
      if (!employeeExists) {
        throw new Error("Employee not found");
      }

      // Check if oils exist
      const oilsExists = await this.checkOilsExists();
      if (!oilsExists) {
        throw new Error("Oils not found");
      }

      // Insert transport data
      let sql = `INSERT INTO tb_transports (id_documents, dimention, order_id, employee_id, oils_id, company, statuss, supplier_id, car_id, createdAt, updatedAt, user_id)
                        VALUES ('${this.id_documents}', '${this.dimention}', '${this.order_id}', '${this.employee_id}', '${this.oils_id}', '${this.company}', '${this.statuss}', '${this.supplier_id}', '${this.car_id}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '${this.user_id}')`;
      await db.execute(sql);
    } catch (error) {
      console.error("Error saving transport:", error);
      throw error;
    }
  }

  async delete() {
    let sql = `DELETE FROM tb_transports WHERE transport_id=${this.transport_id}`;
    await db.execute(sql);
  }

  async update() {
    try {
      // Check if employee exists
      const employeeExists = await this.checkEmployeeExists();
      if (!employeeExists) {
        throw new Error("Employee not found");
      }

      // Check if oils exist
      const oilsExists = await this.checkOilsExists();
      if (!oilsExists) {
        throw new Error("Oils not found");
      }

      // Update transport data
      let sql = `UPDATE tb_transports
            SET id_documents='${this.id_documents}', dimention='${this.dimention}', order_id='${this.order_id}', employee_id='${this.employee_id}', oils_id='${this.oils_id}', company='${this.company}', statuss='${this.statuss}', supplier_id='${this.supplier_id}', car_id='${this.car_id}', user_id='${this.user_id}', updatedAt=CURRENT_TIMESTAMP
            WHERE transport_id=${this.transport_id}`;
      await db.execute(sql);
    } catch (error) {
      console.error("Error updating transport:", error);
      throw error;
    }
  }

  static findAll() {
    let sql = `SELECT *
                    FROM tb_transports tt
                 LEFT JOIN tb_documents td ON tt.id_documents = td.id_documents
                LEFT   JOIN tb_oils toi ON tt.oils_id = toi.oils_id
                LEFT  JOIN tb_employees te ON tt.employee_id = te.employee_id
                LEFT  JOIN tb_suppliers ts ON tt.supplier_id = ts.supplier_id
                LEFT  JOIN tb_cars tc ON tt.car_id = tc.car_id
                LEFT  JOIN tb_users tu ON tt.user_id = tu.user_id
                LEFT  JOIN tb_sales tsell ON tt.order_id = tsell.sales_id`;
    return db.execute(sql);
  }

  static findTransById(transport_id) {
    let sql = `SELECT tt.transport_id,
                            td.id_documents,
                            td.address,
                            td.contact,
                            td.company,
                            tt.dimention,
                            toi.oils_id,
                            toi.oil_name,             -- Include oil_name in the select statement
                            tdd.Qty,
                            tdd.Price,
                            te.employee_id,
                            te.employeename,         -- Include employeename in the select statement
                            ts.supplier_name,
                            tc.car_name,
                            tu.username,
                            tt.statuss
                    FROM   tb_transports tt
                    LEFT JOIN tb_documents td ON tt.id_documents = td.id_documents
                    LEFT JOIN tb_sales tod ON tt.order_id = tod.sales_id
                    LEFT JOIN tb_oils toi ON tt.oils_id = toi.oils_id
                    LEFT JOIN tb_suppliers ts ON tt.supplier_id = ts.supplier_id
                    LEFT JOIN tb_cars tc ON tt.car_id = tc.car_id
                    LEFT JOIN tb_employees te ON tt.employee_id = te.employee_id
                    LEFT JOIN tb_users tu ON tt.user_id = tu.user_id
                    LEFT JOIN tb_selldetail tdd ON tod.sales_id = tdd.sales_id
                    WHERE  tt.transport_id = ${transport_id}`;
    return db.execute(sql);
  }

  async checkEmployeeExists() {
    let selectSql = `SELECT * FROM tb_employees WHERE employee_id = '${this.employee_id}'`;
    const [rows] = await db.execute(selectSql);
    return rows.length > 0;
  }

  async checkOilsExists() {
    let selectSql = `SELECT * FROM tb_oils WHERE oils_id = '${this.oils_id}'`;
    const [rows] = await db.execute(selectSql);
    return rows.length > 0;
  }
}

module.exports = Transports;
