const db = require("../config/db");
class Customers {
  constructor(cus_id, cus_name, address, contact, status, phone, user_id) {
    this.cus_id = cus_id;
    this.cus_name = cus_name;
    this.address = address;
    this.contact = contact;
    this.status = status;
    this.phone = phone;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_customers(cus_id,cus_name,address,contact,status,phone,createdAt,updatedAt,user_id)
    VALUES(NULL,'${this.cus_name}','${this.address}','${this.contact}','${this.status}','${this.phone}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_customers WHERE cus_id=${this.cus_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_customers SET cus_name='${this.cus_name}',address='${this.address}',contact='${this.contact}',status='${this.status}',phone='${this.phone}',user_id='${this.user_id}' WHERE cus_id='${this.cus_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql =
      "SELECT * FROM `tb_customers` tc, tb_users tu WHERE tc.user_id = tu.user_id";
    return db.execute(sql);
  }
}
module.exports = Customers;
