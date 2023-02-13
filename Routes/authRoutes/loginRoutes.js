const { userLogin, getUsers } = require('../../Controller/authController/loginController');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').post(userLogin);
loginRoutes.route('/login/users').get(getUsers);

module.exports = loginRoutes;