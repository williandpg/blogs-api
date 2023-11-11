const { Category } = require('../models');

const findCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFULL', data: categories };
};

module.exports = {
  findCategories,
};