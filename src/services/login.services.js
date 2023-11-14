const { User } = require('../models');
const { generateToken } = require('../utils/jwt.utils.js');

const getLogin = async (email, password) => {
  if (!email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  const user = await User.findOne(
    { where: { email, password }, attributes: { exclude: ['password'] } },
  );
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  const token = generateToken({ user });
  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  getLogin,
};