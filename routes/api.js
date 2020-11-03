const express = require('express');

const Question = require('../models/question');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.get('/', (err, req, res, next) => {
  if (err) {
    next(new Error('error on api endpoint'));
  }
  res.send('successfully reached api endpoint');
});

router.get('/questions', (err, req, res, next) => {
  if (err) {
    next(new Error('error while getting questions'));
  }

  Question.find({}, (error, questions) => {
    if (questions) {
      res.send(questions);
    } else {
      res.send(`error while getting questions with: ${error}`);
    }
  });
});

router.post('/questions/add', isAuthenticated, async (err, req, res, next) => {
  if (err) {
    next(new Error('error while adding question'));
  }

  const { questionText } = req.body;
  const { username } = req.session;

  try {
    await Question.create({ questionText, author: username });
    res.send('question added successfully');
  } catch {
    res.send('failure occurs when adding the question');
  }
});

router.post('/questions/answer', isAuthenticated, async (err, req, res, next) => {
  if (err) {
    next(new Error('error while answering question'));
  }

  const { _id, answer } = req.body;

  try {
    await Question.findOneAndUpdate({ _id }, { answer }, { useFindAndModify: true });
    res.send('answer added successfully');
  } catch {
    res.send(`failure occurs when adding answer to question with id: ${_id}`);
  }
});

module.exports = router;
