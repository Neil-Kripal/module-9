const Post = require('../models/Post');

// Create posts
exports.createPost = async (req, res) => {
    try {
      const { title, description, image } = req.body;
      const post = new Post({ title, description, image });
      await post.save();
      res.redirect('/posts');
    } catch (err) {
      console.error('Error creating post:', err);
      res.status(500).send('Internal Server Error');
    }
  };
  
//Get posts
  exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      console.error('Error getting posts:', err);
      res.status(500).send('Internal Server Error');
    }
  };

  exports.likePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Post.findOneAndUpdate(
          { _id: postId},
          { $inc: { likes:1}},
          { new:true }
        );

        if (!post) {
          return res.status(404).send('Post not found');
        }

        res.json(post);
      } catch (err) {
        console.error('Error liking post:', err);
        res.status(500).send('Internal Server Error');
      }
  };

