const express = require('express');
const router = express.Router();
const { makePayment } = require('../controllers/StripePayment');
router.post('/stripePayment', makePayment);

module.exports = router;
