const categoryServices = require('../services/index');

const getCategories = async (_req, res) => {
  const { status, data } = await categoryServices.findCategories();
  if (status === 'SUCCESSFULL') {
    return res.status(200).json(data);
  }
};

module.exports = {
  getCategories,
};