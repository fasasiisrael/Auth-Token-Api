const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
  return jwt.sign(user, config.secretKey, { expiresIn: '1h' });
};

module.exports = {
  generateToken,
};
