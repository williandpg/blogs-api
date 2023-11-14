const { Category } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  getAllCategories,
};