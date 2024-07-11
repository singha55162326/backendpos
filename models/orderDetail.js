const db = require("../config/db");
class Selldetail {
    constructor(Order_Detail_ID, Qty, Price, oils_id, orders_id) {
        this.Order_Detail_ID = Order_Detail_ID;
        this.Qty = Qty;
        this.Price = Price;
        this.oils_id = oils_id;
        this.orders_id = orders_id;
    }
    save() {
        let sql = `INSERT INTO tb_orderdetail(Order_Detail_ID,Qty,Price,oils_id,orders_id) VALUES(NULL,'${this.Qty}','${this.Price}','${this.oils_id}','${this.orders_id}')`;
        console.log('sql:', sql)
        return db.execute(sql);
    }
}
module.exports = Selldetail;
