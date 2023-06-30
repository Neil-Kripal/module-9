const express = require('express');
const router = express.Router();
const PostController = require('../Controllers/postControllers');

// Create a post
router.post('/', PostController.createPost);

// Get all posts
router.get('/', PostController.getAllPosts);

// Like a post
router.post('/:postId/like', PostController.likePost);


module.exports = router;
