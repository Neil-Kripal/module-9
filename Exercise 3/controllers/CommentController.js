const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};
