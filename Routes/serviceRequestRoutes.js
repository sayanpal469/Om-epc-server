const { createServiceRequest, getServiceRequest, updateServiceStatus } = require('../Controller/serviceRequestController');
const serviceRequestRoute = require('express').Router();

serviceRequestRoute.route('/serviceReq/new').post(createServiceRequest);
serviceRequestRoute.route('/serviceReq').get(getServiceRequest);
serviceRequestRoute.route('/serviceReq/status/:id').put(updateServiceStatus);

module.exports = serviceRequestRoute;