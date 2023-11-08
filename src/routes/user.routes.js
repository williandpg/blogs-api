const routes = require('express').Router();
const { userControllers } = require('../controllers');

routes.post('/', userControllers.getUser);

module.exports = routes;