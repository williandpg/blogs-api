const routes = require('express').Router();
const { categoryControllers } = require('../controllers');

routes.get('/', categoryControllers.getCategories);

module.exports = routes;