const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const { userServices } = require('../services');

const tokenSplit = (bearerToken) => bearerToken.split(' ')[1];

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(tokenSplit(token), SECRET_KEY);
    const user = await userServices.findUser(decoded.user.id);
    if (!user) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};