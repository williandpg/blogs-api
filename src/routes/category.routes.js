const routes = require('express').Router();
const auth = require('../middlewares/auth');
const { categoryControllers } = require('../controllers');

routes.get('/', auth, categoryControllers.getCategories);

module.exports = routes;