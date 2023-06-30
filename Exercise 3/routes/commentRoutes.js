const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/CommentController');

router.get('/comments', CommentController.getComments);

module.exports = router;
