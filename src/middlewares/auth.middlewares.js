const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const SECRET_KEY = process.env.JWT_SECRET;

const tokenSplit = (bearerToken) => bearerToken.split(' ')[1];

const auth = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = tokenSplit(bearerToken);
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await userService.getUserById(decoded.user.id);
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = auth;