const { User } = require('../models');
const { generateToken } = require('../utils');

const findLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password }, exclude: ['password'] });
  if (!user) {
    return { status: (400), data: ({ message: 'Invalid fields' }) };
  }
  if (!email || !password) {
    return { status: (400), data: ({ message: 'Some required fields are missing' }) };
  }
  const token = generateToken({ user });
  return { status: (200), data: ({ token }) };
};

module.exports = {
  findLogin,
};