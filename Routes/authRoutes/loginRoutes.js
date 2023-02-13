const { userLogin, getUsers } = require('../../Controller/authController/loginController');

const loginRoutes = require('express').Router();

loginRoutes.route('/login').post(userLogin);
loginRoutes.route('/login/user/:email').get(getUsers);

module.exports = loginRoutes;