const { categoryService } = require('../services');
const httpMapStatus = require('../utils/http.utils');

const getAllCategories = async (_req, res) => {
  const { status, data } = await categoryService.getAllCategories();
  return res.status(httpMapStatus(status)).json(data);
};

module.exports = {
  getAllCategories,
};