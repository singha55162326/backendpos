const Import = require("../models/import");
const UpdateStatusOrder = require("../models/updateStatusOrder");
const { SUCCESS, INPUT_NULL } = require("../config/errorCode");
const { MS_SUCCESS, MS_INPUT_NULL } = require("../config/message");

exports.createImport = async (req, res, next) => {
    try {
        let { ImpID, Qty, Price, ImpDate, Orders_id, supplier_id } = req.body;
        console.log('req.body:', req.body)
        if (Qty && Price && ImpDate && Orders_id && supplier_id) {

            let imports = new Import(ImpID, Qty, Price, ImpDate, Orders_id, supplier_id);
            imports = await imports.save();

            let updateStatusOrder = new UpdateStatusOrder(Orders_id);
            updateStatusOrder = await updateStatusOrder.update();


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

exports.getMaxIdImport = async (req, res, next) => {
    try {
      let [imports, _] = await Import.findMaxId();
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        pag: 1,
        per_pag: 10,
        total: imports.length,
        status: true,
        imports,
      });
    } catch (error) {
      next(error);
    }
  };


  exports.getImportById = async (req, res, next) => {
    try {
      let ImpID = req.params.id;
      let [imports, _] = await Import.importById(ImpID)
      res.status(200).json({
        message: MS_SUCCESS,
        responseCode: SUCCESS,
        status: true,
        imports,
       });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };