const { createUpsServiceRequest, getUpsServiceRequest, getUpsServiceRequestByEmail, completeUpsServiceRequest, cancelUpsServiceRequest } = require('../../Controller/serviceRequest/upsServiceRequestController');

const upsServiceRequestRoutes = require('express').Router();

upsServiceRequestRoutes.route('/serviceReq/ups/new').post(createUpsServiceRequest);
upsServiceRequestRoutes.route('/serviceReq/ups').get(getUpsServiceRequest);
upsServiceRequestRoutes.route('/serviceReq/ups/:email').get(getUpsServiceRequestByEmail);
upsServiceRequestRoutes.route('/serviceReq/ups/complete/:id').put(completeUpsServiceRequest);
upsServiceRequestRoutes.route('/serviceReq/ups/cancel/:id').put(cancelUpsServiceRequest);

module.exports = upsServiceRequestRoutes;