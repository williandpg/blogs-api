const loginServices = require('../services/login.services');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginServices.findLogin(email, password);
  if (status === 'NOT_FOUND') {
    return res.status(404).json(data);
  }
  return res.status(200).json(data);
};

module.exports = {
  getLogin,
};