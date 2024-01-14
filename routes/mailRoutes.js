const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

// POST /send-token
router.post('/send-token', mailController.sendToken);

module.exports = router;
