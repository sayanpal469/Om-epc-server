const { createSurveillanceServiceRequest, getSurveillanceServiceRequest, updateSurveillanceServiceStatus, getSurveillanceServiceRequestByEmail, completeSurveillanceServiceRequest, cancelSurveillanceServiceRequest } = require('../../Controller/serviceRequest/surveillanceServiceRequestController');

const surveillanceServiceRequestRoutes = require('express').Router();

surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/new').post(createSurveillanceServiceRequest);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance').get(getSurveillanceServiceRequest);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/:email').get(getSurveillanceServiceRequestByEmail);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/complete/:id').put(completeSurveillanceServiceRequest);
surveillanceServiceRequestRoutes.route('/serviceReq/surveillance/cancel/:id').put(cancelSurveillanceServiceRequest);

module.exports = surveillanceServiceRequestRoutes;