const db = require("../config/db");
class Suppliers {
  constructor(supplier_id, supplier_name, user_id) {
    this.supplier_id = supplier_id;
    this.supplier_name = supplier_name;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_suppliers(supplier_id,supplier_name,createdAt,updatedAt,user_id)
    VALUES(NULL,'${this.supplier_name}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_suppliers WHERE supplier_id=${this.supplier_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_suppliers SET supplier_name='${this.supplier_name}',user_id='${this.user_id}' WHERE supplier_id='${this.supplier_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM `tb_suppliers` ts, tb_users tu WHERE ts.user_id = tu.user_id";
    return db.execute(sql);
  }
}
module.exports = Suppliers;
