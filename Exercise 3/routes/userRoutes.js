const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const User = require('../models/Users');
const { route } = require('./userRoutes');

router.post('/users', UserController.createUser);
router.get('/users', UserController.getUsers);

module.exports = router; 