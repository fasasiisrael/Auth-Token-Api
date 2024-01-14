const authService = require('../services/authService');
const mailService = require('../services/mailService');

exports.login = async (req, res) => {
  try {
    const email = req.body.email;

    // Generate a JWT token
    const token = await authService.login(email);

    // Send the token to the provided email
    await mailService.sendToken(email, token);

    res.json({ message: 'Token sent to the provided email!' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
