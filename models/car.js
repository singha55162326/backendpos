const db = require('../config/db');
class Cars {
  constructor(car_id, car_name,dimention, user_id) {
    this.car_id = car_id;
    this.car_name = car_name;
    this.dimention = dimention;
    this.user_id = user_id;
  }
  save() {
    let sql = `INSERT INTO tb_cars(car_id,car_name,dimention,createdAt,updatedAt,user_id)
    VALUES(NULL,'${this.car_name}','${this.dimention}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,'${this.user_id}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_cars WHERE car_id=${this.car_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_cars SET car_name='${this.car_name}',dimention='${this.dimention}',user_id='${this.user_id}' WHERE car_id='${this.car_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM `tb_cars` tc, tb_users tu WHERE tc.user_id = tu.user_id";
    return db.execute(sql);
  }

}
module.exports = Cars;