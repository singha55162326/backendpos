const db = require('../config/db');
class auth {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    checkAuth() {
        let sql = `SELECT * FROM tb_users WHERE username='${this.username}'`;
        return db.execute(sql);
    }
}
module.exports = auth;