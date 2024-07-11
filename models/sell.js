const db = require("../config/db");

class Sell {
  constructor(sales_id, qty, total, status_sell, cus_id, employee_id, user_id) {
    this.sales_id = sales_id;
    this.qty = qty;
    this.total = total;
    this.status_sell = status_sell;
    this.cus_id = cus_id;
    this.employee_id = employee_id;
    this.user_id = user_id;
  }

  save() {
    let sql = `INSERT INTO tb_sales (sales_id, qty, total, status_sell, cus_id, employee_id, createdAt, updatedAt, user_id)
               VALUES (NULL, '${this.qty}', '${this.total}', '${this.status_sell}', '${this.cus_id}', '${this.employee_id}', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, '${this.user_id}')`;
    console.log("sql:", sql);
    return db.execute(sql);
  }

  static findMaxId() {
    let sql = "SELECT MAX(`sales_id`) as saleId FROM `tb_sales`";
    return db.execute(sql);
  }

  static findAll() {
    let sql =
      "SELECT ts.*, tc.cus_name, te.employeename, tu.username, toi.oil_name " +
      "FROM tb_sales ts " +
      "LEFT JOIN tb_customers tc ON ts.cus_id = tc.cus_id " +
      "LEFT JOIN tb_employees te ON ts.employee_id = te.employee_id " +
      "LEFT JOIN tb_users tu ON ts.user_id = tu.user_id " +
      "LEFT JOIN tb_selldetail tsd ON ts.sales_id = tsd.sales_id " +
      "LEFT JOIN tb_oils toi ON tsd.oil_id = toi.oils_id";
    return db.execute(sql);
  }

  static sellById(sales_id) {
    let sql =
      `SELECT ts.sales_id, toi.oil_name, tsd.Qty, tsd.Price, tc.cus_name, te.employeename, tc.address, tc.phone, tu.username ` +
      `FROM tb_sales ts ` +
      `LEFT JOIN tb_customers tc ON ts.cus_id = tc.cus_id ` +
      `LEFT JOIN tb_employees te ON ts.employee_id = te.employee_id ` +
      `LEFT JOIN tb_users tu ON ts.user_id = tu.user_id ` +
      `LEFT JOIN tb_selldetail tsd ON ts.sales_id = tsd.sales_id ` +
      `LEFT JOIN tb_oils toi ON tsd.oil_id = toi.oils_id ` +
      `WHERE ts.sales_id = ${sales_id}`;
    return db.execute(sql);
  }
}

module.exports = Sell;
