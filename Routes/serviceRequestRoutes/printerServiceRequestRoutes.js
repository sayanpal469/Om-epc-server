const { createPrinterServiceRequest, getPrinterServiceRequest, updatePrinterServiceStatus } = require('../../Controller/serviceRequest/printerServiceRequestController');


const printerServiceRequestRoutes = require('express').Router();

printerServiceRequestRoutes.route('/serviceReq/printer/new').post(createPrinterServiceRequest);
printerServiceRequestRoutes.route('/serviceReq/printer').get(getPrinterServiceRequest);
printerServiceRequestRoutes.route('/serviceReq/printer/status/:id').put(updatePrinterServiceStatus);

module.exports = printerServiceRequestRoutes;