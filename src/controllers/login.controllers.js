const { loginServices } = require('../services');
const httpMapStatus = require('../utils/index');

const getLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginServices.findLogin(email, password);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getLogin,
};