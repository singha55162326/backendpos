const db = require("../config/db");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.reqSaveSellDetail = async (req, res, next) => {
  try {
    let { listData } = req.body;

    if (!listData || listData.length === 0) {
      return res.json({
        message: MS_INPUT_NULL,
        responseCode: INPUT_NULL,
        status: false,
      });
    }

    for (let i = 0; i < listData.length; i++) {
      try {
        let sql = `INSERT INTO tb_selldetail (Sell_Detail_ID, sales_id, Qty, Price, oil_id, total, cus_id, employee_id, user_id)
                   VALUES (NULL, '${listData[i].sales_id}', '${listData[i].Qty}', '${listData[i].Price}', '${listData[i].oil_id}', '${listData[i].total}', '${listData[i].cus_id}', '${listData[i].employee_id}', '${listData[i].user_id}')`;
        await db.query(sql);

        let updateOilSql = `UPDATE tb_oils SET qty = qty - ${listData[i].Qty} WHERE oils_id = ${listData[i].oil_id}`;
        await db.query(updateOilSql);
      } catch (error) {
        console.error(`Error processing item ${i}:`, error);
      }
    }

    res.status(200).json({
      message: MS_SUCCESS,
      responseCode: SUCCESS,
      status: true,
    });
  } catch (error) {
    next(error);
  }
};
