const routes = require('express').Router();
const { postController } = require('../controllers');
const auth = require('../middlewares/auth.middlewares');

routes.get('/', auth, postController.getPost);
routes.get('/:id', auth, postController.getAllPosts);

module.exports = routes;