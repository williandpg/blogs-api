const { User } = require('../models');
const { generateToken } = require('../utils/jwt.utils.js');
const loginSchema = require('../validations/joi.user.validations');

const getUser = async (displayName, email, password, image) => {
  const { error } = loginSchema.validate([{ displayName, email, password }]);
  if (error) {
    const status = error.details[0].message.split('&')[0];
    const message = error.details[0].message.split('&')[1];
    return { status, data: { message } };
  }
  const findUserEmail = await User.findOne({ where: { email } });
  if (findUserEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const user = await User.create({ displayName, email, password, image });
  delete user.dataValues.password;
  const token = generateToken({ user });
  return { status: 'CREATED', data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: 'SUCCESSFUL', data: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  getUser,
  getAllUsers,
  getUserById,
};