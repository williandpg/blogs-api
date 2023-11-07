const loginServices = require('../services/login.services');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginServices.findLogin(email, password);
  return res.status(200).json(response);
};

module.exports = {
  getLogin,
};