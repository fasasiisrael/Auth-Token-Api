const jwtUtils = require('../utils/jwtUtils');

exports.signup = async (email) => {
  // Implement user signup logic, and return the user object if successful

  const user = { email };
  return user;
};

exports.login = async (email) => {
  // Implement user login logic, generate and return a JWT token if successful
  const user = { email };
  const token = jwtUtils.generateToken(user);
  return token;
};
