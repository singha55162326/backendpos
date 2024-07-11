const Report = require("../models/report");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.getReport = async (req, res, next) => {
    try {
        let data = req.params.value;
        const textSplit = data.split("&");
        const nameFuc = textSplit[0];
        const startDate = textSplit[1];
        const endDate = textSplit[2];
        switch (nameFuc) {
            case 'REPORT_SELL':
                let [reportValueSell] = await Report.getReportSell(startDate, endDate);
                res.status(200).json({
                    message: MS_SUCCESS,
                    responseCode: SUCCESS,
                    status: true,
                    reportValueSell,
                });
                break;
            case 'REPORT_ORDER':
                let [reportValueOrder] = await Report.getReportOrder(startDate, endDate);
                res.status(200).json({
                    message: MS_SUCCESS,
                    responseCode: SUCCESS,
                    status: true,
                    reportValueOrder,
                });
                break;
            case 'REPORT_IMPORT':
                let [reportValueImport] = await Report.getReportImport(startDate, endDate);
                res.status(200).json({
                    message: MS_SUCCESS,
                    responseCode: SUCCESS,
                    status: true,
                    reportValueImport,
                });
                break;
            case 'REPORT_OILS':
                let [reportValueOil] = await Report.getReportOils(startDate, endDate);
                res.status(200).json({
                    message: MS_SUCCESS,
                    responseCode: SUCCESS,
                    status: true,
                    reportValueOil,
                });
                break;

            case 'REPORT_TRANSFER':
                let [reportValueTransfer] = await Report.getReportTransfer(startDate, endDate);
                res.status(200).json({
                    message: MS_SUCCESS,
                    responseCode: SUCCESS,
                    status: true,
                    reportValueTransfer,
                });
                break;


            default:
                break;
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

exports.getAllOrder = async (req, res, next) => {
    try {
        let [dataSum, _] = await Report.getSumReport();
        res.status(200).json({
            message: MS_SUCCESS,
            responseCode: SUCCESS,
            pag: 1,
            per_pag: 10,
            total: dataSum.length,
            status: true,
            dataSum,
        });
    } catch (error) {
        next(error);
    }
};

