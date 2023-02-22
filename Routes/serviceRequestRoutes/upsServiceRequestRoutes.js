const { createUpsServiceRequest, getUpsServiceRequest, updateUpsServiceStatus } = require('../../Controller/serviceRequest/upsServiceRequestController');

const upsServiceRequestRoutes = require('express').Router();

upsServiceRequestRoutes.route('/serviceReq/ups/new').post(createUpsServiceRequest);
upsServiceRequestRoutes.route('/serviceReq/ups').get(getUpsServiceRequest);
upsServiceRequestRoutes.route('/serviceReq/ups/status/:id').put(updateUpsServiceStatus);

module.exports = upsServiceRequestRoutes;