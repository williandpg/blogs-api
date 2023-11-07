const routes = require('express').Router();
const { loginControllers } = require('../controllers');

routes.post('/', loginControllers.getLogin);

module.exports = routes;