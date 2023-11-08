const userServices = require('../services/index');

const getUser = async (req, res) => {
  const { status, data } = await userServices.findUser(req.body);
  if (status === 'BAD_REQUEST') {
    return res.status(400).json(data);
  }
  if (status === 'CONFLICT') {
    return res.status(409).json(data);
  }
  return res.status(201).json(data);
};

module.exports = {
  getUser,
};