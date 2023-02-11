const checkEmail = require('../../Controller/authController/checkEmailController');
const checkEmailRoutes = require('express').Router();

checkEmailRoutes.route('/checkEmail').post(checkEmail);

module.exports = checkEmailRoutes;