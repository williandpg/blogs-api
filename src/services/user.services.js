const { User } = require('../models');
const { generateToken } = require('../utils');
const { loginSchema } = require('../validations/joi.user.validations');

const findUser = async (data) => {
  const { email } = data;
  const { error } = loginSchema.validate(data);
  if (error) {
    return { status: 'BAD_REQUEST', data: { message: error.details[0].message } };
  }
  const findUserEmail = await User.findOne({ where: { email } });
  if (findUserEmail) {
    return { status: 'CONFLICT', data: { message: 'User already registered' } };
  }
  const user = await User.create(data);
  const { id, displayName } = user.dataValues;
  const token = generateToken({ id, displayName, email });
  return { status: 'CREATED', data: { token } };
};

module.exports = {
  findUser,
};