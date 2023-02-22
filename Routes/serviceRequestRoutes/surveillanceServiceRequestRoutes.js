const { createSurveillanceServiceRequest, getSurveillanceServiceRequest, updateSurveillanceServiceStatus } = require('../../Controller/serviceRequest/surveillanceServiceRequestController');

const surveillanceServiceRequestRoutes = require('express').Router();

surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/new').post(createSurveillanceServiceRequest);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance').get(getSurveillanceServiceRequest);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/status/:id').put(updateSurveillanceServiceStatus);

module.exports = surveillanceServiceRequestRoutes;