const { postService } = require('../services');
const httpMapStatus = require('../utils/http.utils');

const getPost = async (req, res) => {
  const { status, data } = await postService.getPost(req.body, req.user);
  return res.status(httpMapStatus(status)).json(data);
};

const getAllPosts = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.getAllPosts(id);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getPost,
  getAllPosts,
};