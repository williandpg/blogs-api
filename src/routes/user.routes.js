const routes = require('express').Router();
const { userControllers } = require('../controllers');
const auth = require('../middlewares/auth');

routes.post('/', userControllers.getUser);
routes.get('/', auth, userControllers.getUsers);
routes.get('/:id', auth, userControllers.getUserById);

module.exports = routes;