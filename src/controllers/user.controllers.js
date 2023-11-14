const { userService } = require('../services');
const httpMapStatus = require('../utils/http.utils');

const getUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.getUser(displayName, email, password, image);
  return res.status(httpMapStatus(status)).json(data);
};

const getAllUsers = async (req, res) => {
  const { status, data } = await userService.getAllUsers();
  return res.status(httpMapStatus(status)).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getUserById(id);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getUser,
  getAllUsers,
  getUserById,
};