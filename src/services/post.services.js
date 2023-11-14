const { User, Category, BlogPost } = require('../models');

const createPost = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  return { status: 'SUCCESSFUL', data: posts };
};

module.exports = {
  createPost,
};