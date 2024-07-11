const db = require("../config/db");
class Categories {
  constructor(oil_type, oil_typename, user_id) {
    this.oil_type = oil_type;
    this.oil_typename = oil_typename;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_categories(oil_type,oil_typename,createdAt,updatedAt,user_id)
    VALUES(NULL,'${this.oil_typename}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_categories WHERE oil_type=${this.oil_type}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_categories SET oil_typename='${this.oil_typename}',user_id='${this.user_id}' WHERE oil_type='${this.oil_type}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM tb_categories";
    return db.execute(sql);
  }
}
module.exports = Categories;
