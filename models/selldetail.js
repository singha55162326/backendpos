const db = require("../config/db");

class Selldetail {
  constructor(
    sales_id,
    Qty,
    Price,
    oil_id,
    total,
    cus_id,
    employee_id,
    user_id
  ) {
    this.sales_id = sales_id;
    this.Qty = Qty;
    this.Price = Price;
    this.oil_id = oil_id;
    this.total = total;
    this.cus_id = cus_id;
    this.employee_id = employee_id;
    this.user_id = user_id;
  }

  save() {
    let sql = `INSERT INTO tb_selldetail (Sell_Detail_ID, sales_id, Qty, Price, oil_id, total, cus_id, employee_id, user_id)
                VALUES (NULL, '${this.sales_id}', '${this.Qty}', '${this.Price}', '${this.oil_id}', '${this.total}', '${this.cus_id}', '${this.employee_id}', '${this.user_id}')`;
    console.log("sql:", sql);
    return db.execute(sql);
  }
}

module.exports = Selldetail;
