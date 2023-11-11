const { User } = require('../models');
const { generateToken } = require('../utils');
const { loginSchema } = require('../validations/joi.user.validations');

const findUser = async (data) => {
  const { email } = data;
  const { error } = loginSchema.validate(data);
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.message } };
  }
  const findUserEmail = await User.findOne({ where: { email } });
  if (findUserEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const user = await User.create(data);
  const { id, displayName } = user.dataValues;
  const token = generateToken({ id, displayName });
  return { status: 'CREATED', data: { token } };
};

const findUsers = async () => {
  const users = await User.findAll({ exclude: ['password'] });
  return { status: 'SUCCESSFULL', data: users };
};

const findUserById = async (id) => {
  const user = await User.findByPk(id, { exclude: ['password'] });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFULL', data: user };
};

module.exports = {
  findUser,
  findUsers,
  findUserById,
};