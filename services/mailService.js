const nodemailer = require('nodemailer');

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  host: '127.0.0.1', // Localhost
  port: 1080, // Port used by MailDev or MailHog
  ignoreTLS: true,
});

exports.sendToken = async (email, token) => {
  try {
    // Setup email data
    const mailOptions = {
      from: 'your-email@example.com', // Replace with your email address
      to: email,
      subject: 'Authentication Token',
      text: `Your authentication token is: ${token}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send token via email.');
  }
};
