const db = require("../config/db");
class Documents {
  constructor(
    id_documents,
    address,
    order_id,
    contact,
    traid,
    date,
    company,
    dimention,
    phone,
    service,
    price,
    user_id
  ) {
    this.id_documents = id_documents;
    this.address = address;
    this.order_id = order_id;
    this.contact = contact;
    this.traid = traid;
    this.date = date;
    this.company = company;
    this.dimention = dimention;
    this.phone = phone;
    this.service = service;
    this.price = price;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_documents(id_documents, address, order_id, contact, traid, date, company, dimention, phone, service, price,createdAt,updatedAt, user_id)
    VALUES(NULL,'${this.address}','${this.order_id}','${this.contact}','${this.traid}','${this.date}','${this.company}','${this.dimention}','${this.phone}','${this.service}','${this.price}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_documents WHERE id_documents=${this.id_documents}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_documents SET address='${this.address}',order_id='${this.order_id}', contact='${this.contact}', traid='${this.traid}', date='${this.date}', company='${this.company}', dimention='${this.dimention}', phone='${this.phone}', service='${this.service}', price='${this.price}',user_id='${this.user_id}' WHERE id_documents='${this.id_documents}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql =
      "SELECT * FROM `tb_documents` td, tb_sales ts, tb_users tu, tb_customers tc, tb_employees te WHERE td.order_id = ts.sales_id AND td.user_id = tu.user_id AND ts.cus_id = tc.cus_id AND td.traid = te.employee_id;";
    return db.execute(sql);
  }

  static findDocById(id_documents) {
    let sql = `SELECT td.id_documents,
        td.address,
        td.order_id,
        td.contact,
        td.traid,
        td.company,
        td.dimention,
        td.phone,
        td.service,
        tu.username,
        tos.oils_id,
        tos.oil_name,
        tod.Qty,
        tod.Price
 FROM   tb_documents td,
        tb_sales toi,
        tb_users tu,
        tb_selldetail tod,
        tb_oils tos
 WHERE  td.order_id = toi.sales_id
        AND td.user_id = tu.user_id
        AND toi.sales_id = tod.sales_id
        AND tod.oil_id = tos.oils_id
        AND td.id_documents = ${id_documents}`;
    return db.execute(sql);
  }
}
module.exports = Documents;
