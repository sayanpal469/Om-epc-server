const { createPrinterServiceRequest, getAllPrinterServiceRequest, getPrinterServiceRequestByEmail, completePrinterServiceRequest, cancelPrinterServiceRequest } = require('../../Controller/serviceRequest/printerServiceRequestController');


const printerServiceRequestRoutes = require('express').Router();

printerServiceRequestRoutes.route('/serviceReq/printer/new').post(createPrinterServiceRequest);
printerServiceRequestRoutes.route('/serviceReq/printer').get(getAllPrinterServiceRequest);
printerServiceRequestRoutes.route('/serviceReq/printer/:email').get(getPrinterServiceRequestByEmail);
printerServiceRequestRoutes.route('/serviceReq/printer/complete/:id').put(completePrinterServiceRequest);
printerServiceRequestRoutes.route('/serviceReq/printer/cancel/:id').put(cancelPrinterServiceRequest);

module.exports = printerServiceRequestRoutes;