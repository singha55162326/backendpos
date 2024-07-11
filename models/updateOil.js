const db = require("../config/db");
class UpdateOil {
  constructor(Qty, oil_id) {
    this.Qty = Qty;
    this.oil_id = oil_id;
  }
  update() {
    let sql = `UPDATE tb_oils SET qty = qty - ${this.Qty} WHERE oils_id = '${this.oil_id}'`;
    console.log('sql-update:', sql)
    return db.execute(sql);
  }

  updatePust() {
    let sql = `UPDATE tb_oils SET qty = qty + ${this.Qty}, status=1 WHERE oils_id = '${this.oil_id}'`;
    console.log('sql-update:', sql)
    return db.execute(sql);
  }

}
module.exports = UpdateOil;
