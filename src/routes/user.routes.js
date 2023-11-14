const routes = require('express').Router();
const { userController } = require('../controllers');
const auth = require('../middlewares/auth.middlewares');

routes.post('/', userController.getUser);
routes.get('/', auth, userController.getAllUsers);
routes.get('/:id', auth, userController.getUserById);

module.exports = routes;