const { createComputerServiceRequest, getComputerServiceRequest, updateComputerServiceStatus } = require('../../Controller/serviceRequest/computerServiceController');

const computerServiceRequestRoute = require('express').Router();

computerServiceRequestRoute.route('/serviceReq/computer/new').post(createComputerServiceRequest);
computerServiceRequestRoute.route('/serviceReq/computer').get(getComputerServiceRequest);
computerServiceRequestRoute.route('/serviceReq/computer/status/:id').put(updateComputerServiceStatus);

module.exports = computerServiceRequestRoute;