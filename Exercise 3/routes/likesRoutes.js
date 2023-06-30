const express = require('express');
const router = express.Router();
const LikeController = require('../controllers/LikeController');

router.get('/likes', LikeController.getLikes);

module.exports = router;
