const Post = require('../models/Posts');


exports.createPost = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const post = await Post.create({ title, description, image });
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create post' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};
