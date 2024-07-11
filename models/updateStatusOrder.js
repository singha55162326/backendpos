const db = require("../config/db");
class UpdateStatusOrder {
  constructor(Orders_id) {
    this.Orders_id = Orders_id;
  }
  update(){
    let sql = `UPDATE tb_orders SET status_order = 2 WHERE orders_id=${this.Orders_id}`;
    console.log('sql-update:', sql)
    return db.execute(sql);
  }

}
module.exports = UpdateStatusOrder;
