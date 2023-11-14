const routes = require('express').Router();
const { categoryController } = require('../controllers');
const auth = require('../middlewares/auth.middlewares');

routes.get('/', auth, categoryController.getAllCategories);

module.exports = routes;