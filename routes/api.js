const express = require('express');

const Question = require('../models/question');
const isAuthenticated = require('../middlewares/isAuthenticated');

const router = express.Router();

router.get('/questions', (req, res, next) => {
  Question.find({}, (error, questions) => {
    if (error) {
      next(error);
    } else if (questions) {
      res.send(questions);
    }
  });
});

router.post('/questions/add', isAuthenticated, async (req, res, next) => {
  const { questionText } = req.body;
  const { username } = req.session;

  try {
    await Question.create({ questionText, author: username });
    res.send('question added successfully');
  } catch (error) {
    next(error);
  }
});

router.post('/questions/answer', isAuthenticated, async (req, res) => {
  const { _id, answer } = req.body;

  try {
    await Question.findOneAndUpdate({ _id }, { answer }, { useFindAndModify: true });
    res.send('answer added successfully');
  } catch {
    res.send(`failure occurs when adding answer to question with id: ${_id}`);
  }
});

module.exports = router;
