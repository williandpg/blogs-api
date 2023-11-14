const { postService } = require('../services');
const httpMapStatus = require('../utils/http.utils');

const createPost = async (req, res) => {
  const { status, data } = await postService.createPost(req.body, req.user);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  createPost,
};