const express = require('express');

const User = require('../models/user');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.post('/', (req, res) => {
  const { username } = req.session;
  if (username && username !== '') {
    res.status(200).send(`${username}`);
  } else {
    res.status(401).send('');
  }
});

router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    await User.create({ username, password });
    res.send('account created succesfully');
  } catch {
    next('failure occurs when creating the user');
  }
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username, password }, (error, user) => {
    if (user) {
      req.session.username = username;
      req.session.password = password;
      res.send('logged in');
    } else {
      next(error);
    }
  });
});

router.post('/logout', isAuthenticated, (req, res) => {
  req.session.username = '';
  res.send('user logged out');
});

module.exports = router;
