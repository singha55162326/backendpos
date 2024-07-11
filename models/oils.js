const db = require("../config/db");
class Oils {
  constructor(oils_id, oil_name, status, qty, price, user_id, supplier_id) {
    this.oils_id = oils_id;
    this.oil_name = oil_name;
    this.status = status;
    this.qty = qty;
    this.price = price;
    this.user_id = user_id;
    this.supplier_id = supplier_id;

  }
  save() {
    let sql = `INSERT INTO tb_oils(oils_id,oil_name,status,qty,price,createdAt,updatedAt,user_id,supplier_id)
    VALUES(NULL,'${this.oil_name}','${this.status}','${this.qty}','${this.price}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}','${this.supplier_id}')`;
    console.log('sql:', sql)
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_oils WHERE oils_id=${this.oils_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_oils SET oil_name='${this.oil_name}',status='${this.status}',qty='${this.qty}',price='${this.price}',user_id='${this.user_id}', supplier_id='${this.supplier_id}' WHERE oils_id='${this.oils_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM `tb_oils` toi, tb_suppliers ts, tb_users tu WHERE toi.supplier_id = ts.supplier_id and toi.user_id = tu.user_id";
    return db.execute(sql);
  }


  static findById(supplier_id) {
    let sql = `SELECT * FROM tb_oils WHERE supplier_id='${supplier_id}'`;
    return db.execute(sql);
  }
}
module.exports = Oils;
