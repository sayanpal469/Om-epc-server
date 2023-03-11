const { createComputerServiceRequest, getComputerServiceRequest, getComputerServiceRequestByEmail, completeComputerServiceRequestStatus, cancelComputerRequest } = require('../../Controller/serviceRequest/computerServiceController');

const computerServiceRequestRoute = require('express').Router();

computerServiceRequestRoute.route('/serviceReq/computer/new').post(createComputerServiceRequest);
computerServiceRequestRoute.route('/serviceReq/computer').get(getComputerServiceRequest);
computerServiceRequestRoute.route('/serviceReq/computer/:email').get(getComputerServiceRequestByEmail);
computerServiceRequestRoute.route('/serviceReq/computer/complete/:id').put(completeComputerServiceRequestStatus);
computerServiceRequestRoute.route('/serviceReq/computer/cancel/:id').put(cancelComputerRequest);

module.exports = computerServiceRequestRoute;