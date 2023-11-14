const { userServices } = require('../services');
const httpMapStatus = require('../utils/index');

const getUser = async (req, res) => {
  const { status, data } = await userServices.findUser(req.body);
  return res.status(httpMapStatus(status)).json(data);
};

const getUsers = async (req, res) => {
  const { status, data } = await userServices.findUsers();
  return res.status(httpMapStatus(status)).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userServices.findUserById(id);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getUser,
  getUsers,
  getUserById,
};