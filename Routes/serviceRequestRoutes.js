const { createServiceRequest } = require('../Controller/serviceRequestController');
const serviceRequestRoute = require('express').Router();

serviceRequestRoute.route('/serviceReq/new').post(createServiceRequest);

module.exports = serviceRequestRoute;