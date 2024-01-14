const mailService = require('../services/mailService');

exports.sendToken = async (req, res) => {
  try {
    const email = req.body.email;
    await mailService.sendToken(email);
    res.json({ message: 'Token sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
