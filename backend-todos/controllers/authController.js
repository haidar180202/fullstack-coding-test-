const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

let users = [];

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Name, email, and password are required.' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, name, email, password: hashedPassword, profilePicture: '' };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully.' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

exports.getProfile = (req, res) => {
  const user = users.find(u => u.id === req.user.userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found.' });
  }
  console.log('Sending profile data:', { id: user.id, name: user.name, email: user.email, profilePicture: user.profilePicture });
  res.json({ id: user.id, name: user.name, email: user.email, profilePicture: user.profilePicture });
};

exports.updateProfile = async (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.user.userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' });
  }

  console.log('Received update profile request with data:', req.body);

  const { name, email, profilePicture, password } = req.body;
  if (name) users[userIndex].name = name;
  if (email) users[userIndex].email = email;
  if (profilePicture !== undefined) users[userIndex].profilePicture = profilePicture;
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    users[userIndex].password = hashedPassword;
  }

  res.json({ message: 'Profile updated successfully.' });
};

exports.deleteProfile = (req, res) => {
  const userIndex = users.findIndex(u => u.id === req.user.userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found.' });
  }

  users.splice(userIndex, 1);

  res.json({ message: 'Profile deleted successfully.' });
};