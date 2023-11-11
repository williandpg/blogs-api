const { User } = require('../models');
const { generateToken } = require('../utils');

const findLogin = async (email, password) => {
  const user = await User.findOne({ where: { email, password }, exclude: ['password'] });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: 'Invalid fields' } };
  }
  if (!email || !password) {
    return { status: 'BAD_REQUEST', data: { message: 'Some required fields are missing' } };
  }
  const token = generateToken({ user });
  return { status: 'SUCCESSFULL', data: { token } };
};

module.exports = {
  findLogin,
};