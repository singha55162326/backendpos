const db = require('../config/db');
class User {
  constructor(user_id, username,hash, role, level, CreatedBy) {
    this.user_id = user_id;
    this.username = username;
    this.hash = hash;
    this.role = role;
    this.level = level;
    this.CreatedBy = CreatedBy;
  }
  save() {
    let sql = `INSERT INTO tb_users(user_id,username,password,role,level,createdAt,updatedAt, CreatedBy)
    VALUES(NULL,'${this.username}','${this.hash}','${this.role}','${this.level}',CURRENT_TIMESTAMP,CURRENT_TIMESTAMP, '${this.CreatedBy}')`;
    return db.execute(sql);
  }

  delete() {
    let sql = `DELETE FROM tb_users WHERE user_id=${this.user_id}`;
    return db.execute(sql);
  }
  update() {
    let sql = `UPDATE tb_users SET username='${this.username}',password='${this.hash}',role='${this.role}',level='${this.level}', CreatedBy='${this.CreatedBy}' WHERE user_id='${this.user_id}'`;
    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM tb_users";
    return db.execute(sql);
  }

}
module.exports = User;