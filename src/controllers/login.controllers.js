const { loginService } = require('../services');
const httpMapStatus = require('../utils/http.utils');

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const { status, data } = await loginService.getLogin(email, password);
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  userLogin,
};