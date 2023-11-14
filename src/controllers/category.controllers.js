const { categoryServices } = require('../services');
const httpMapStatus = require('../utils/index');

const getCategories = async (_req, res) => {
  const { status, data } = await categoryServices.findCategories();
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getCategories,
};