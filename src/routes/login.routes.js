const routes = require('express').Router();
const { loginController } = require('../controllers');

routes.post('/', loginController.userLogin);

module.exports = routes;