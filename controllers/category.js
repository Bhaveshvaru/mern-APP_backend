const express = require('express');
const router = express.Router();

const {} = require('../controllers/category');
const { isAdmin, isAuthenticated, isSignedIn } = require('../controllers/auth');
const { getUserById } = require('../controllers/user');




module.exports = router;
