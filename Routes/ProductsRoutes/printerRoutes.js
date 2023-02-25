const { createPrinter, getPrinters, getSingelPrinter, deletePrinter } = require('../../Controller/ProductControllers/printerController');
const singleFileUpload = require('../../Middlewares/singleFileUpload');

const PrinterRoutes = require('express').Router();

PrinterRoutes.route('/product/printer/new').post(singleFileUpload, createPrinter);
PrinterRoutes.route('/product/printer').get(getPrinters);
PrinterRoutes.route('/product/printer/:id').get(getSingelPrinter).delete(deletePrinter);

module.exports = PrinterRoutes