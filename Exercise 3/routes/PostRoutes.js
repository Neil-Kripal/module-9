const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const { route } = require('./userRoutes');
const Post = require('../models/Posts');

router.post('/posts', PostController.createPost);
router.get('/posts', PostController.getPosts);

module.exports = router;