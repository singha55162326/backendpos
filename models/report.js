const db = require("../config/db");

class Report {
  static getReportOrder(startDate, endDate) {
    let sql = `SELECT * FROM   v_report_order
         WHERE  createdat >= Date_format('${startDate}', '%Y-%m-%d')
         AND createdat < Date_format('${endDate}', '%Y-%m-%d+1'); `;
    return db.execute(sql);
  }

  static getReportImport(startDate, endDate) {
    let sql = `SELECT *
        FROM   v_report_import
        WHERE  impdate >= Date_format('${startDate}', '%Y-%m-%d')
        AND impdate < Date_format('${endDate}', '%Y-%m-%d+1');`;
    return db.execute(sql);
  }

  static getReportSell(startDate, endDate) {
    let sql = `SELECT *
        FROM   v_report_sell
        WHERE  createdAt >= Date_format('${startDate}', '%Y-%m-%d')
        AND createdAt < Date_format('${endDate}', '%Y-%m-%d+1');`;
    return db.execute(sql);
  }
  static getSumReport() {
    let sql = "SELECT * FROM `v_icon_report`";
    return db.execute(sql);
  }

  static getReportOils(startDate, endDate) {
    let sql = `SELECT * FROM v_report_oils WHERE createdAt >= Date_format('${startDate}', '%Y-%m-%d')
        AND createdAt < Date_format('${endDate}', '%Y-%m-%d+1');`;
    return db.execute(sql);
  }

  static getReportTransfer(startDate, endDate) {
    let sql = `SELECT * FROM v_transport WHERE createdat >= Date_format('${startDate}', '%Y-%m-%d')
        AND createdat < Date_format('${endDate}', '%Y-%m-%d+1');`;
    return db.execute(sql);
  }
}
module.exports = Report;
