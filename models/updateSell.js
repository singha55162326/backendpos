const db = require("../config/db");
class UpdateSell {
  constructor(order_id) {
    this.order_id = order_id;
  }
  update() {
    let sql = `UPDATE tb_sales SET status_sell = 2 WHERE sales_id='${this.order_id}'`;
    console.log("sql-update:", sql);
    return db.execute(sql);
  }
}
module.exports = UpdateSell;
