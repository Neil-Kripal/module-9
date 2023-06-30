const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = new User({ username, email });
    await user.save();
    res.redirect('/users');
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error retrieving users:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.getUser = (req, res) => {
  res.send('Get user by ID');
};

