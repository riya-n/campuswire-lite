const express = require('express');

const User = require('../models/user');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.post('/', (err, req, res, next) => {
  if (err) {
    next(new Error('error on account endpoint'));
  }

  const { username } = req.session;

  res.send(`${username} is logged in`);
});

router.post('/signup', async (err, req, res, next) => {
  if (err) {
    next(new Error('error while signing up'));
  }

  const { username, password } = req.body;

  try {
    await User.create({ username, password });
    res.send('account created succesfully');
  } catch {
    next('failure occurs when creating the user');
  }
});

router.post('/login', (err, req, res, next) => {
  if (err) {
    next(new Error('error while logging in'));
  }

  const { username, password } = req.body;

  User.findOne({ username, password }, (error, user) => {
    if (user) {
      req.session.username = username;
      req.session.password = password;
      console.log(req.session);
      res.send('logged in');
    } else if (err) {
      // res.send(`failed to log in with error: ${error}`);
      next(err);
    } else {
      res.send('failed to log in');
    }
  });
});

router.post('/logout', isAuthenticated, (err, req, res, next) => {
  if (err) {
    next(new Error('error while logging out'));
  }

  req.session.username = '';
  res.send('user logged out');
});

module.exports = router;
