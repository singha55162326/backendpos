const db = require("../config/db");
class Selldetail {
    constructor(Import_Detail_ID,ImpID,Qty,Price,oils_id,user_id) {
        this.Import_Detail_ID = Import_Detail_ID;
        this.ImpID =ImpID;
        this.Qty = Qty;
        this.Price = Price;
        this.oils_id = oils_id;
        this.user_id = user_id;
    }

    save() {
        let sql = `INSERT INTO tb_import_detail(Import_Detail_ID,ImpID,Qty,Price,oils_id,user_id) VALUES(NULL,'${this.ImpID}','${this.Qty}','${this.Price}','${this.oils_id}','${this.user_id}')`;
        console.log('sql:', sql)
        return db.execute(sql);
    }
}
module.exports = Selldetail;
