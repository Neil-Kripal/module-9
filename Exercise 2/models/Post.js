const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  likes: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
