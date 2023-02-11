const changePassword = require('../../Controller/authController/forgetPassController');

const forgetPassRoutes = require('express').Router();

forgetPassRoutes.route('/forget/:email').put(changePassword)

module.exports = forgetPassRoutes;
