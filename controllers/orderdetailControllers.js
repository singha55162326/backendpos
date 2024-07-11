const OrderDetail = require("../models/orderDetail");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.reqSaveOrderDetail = async (req, res, next) => {
    try {
        let { listData } = req.body;
        let data = listData
        console.log('listData:', listData)
        if (data.length > 0) {
            for (let i = 0; i < data.length; i++) {
                let orderDetail = new OrderDetail('', data[i].Qty, data[i].Price, data[i].oils_id, data[i].orders_id)
                orderDetail = await orderDetail.save();
            }
            res.status(200).json({
                message: MS_SUCCESS,
                responseCode: SUCCESS,
                status: true,
            });
        } else {
            res.json({
                message: MS_INPUT_NULL,
                responseCode: INPUT_NULL,
                status: false,
            });
        }
    } catch (error) {
        next(error);
    }
};
