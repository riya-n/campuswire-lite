/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';

import {
  BodyText, BodyTextLarge, InputArea, ActionButton, QuestionContainer,
  ListElement, BodyTextBold, AnswerContainer,
} from '../styles';

const Question = (props) => {
  const { question, isLoggedIn } = props;
  const [answer, setAnswer] = useState('');

  const addAnswer = async () => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      await axios.post('/api/questions/answer', { answer, _id: question._id });
      question.answer = answer;
      setAnswer('');
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to Add Answer');
    }
  };

  return (
    <QuestionContainer>
      {
        question === '' ? <></> : (
          <ListElement>
            <BodyTextLarge>{question.questionText ?? ''}</BodyTextLarge>
            <BodyTextBold>Author:</BodyTextBold>
            <BodyText>{question.author ?? ''}</BodyText>
            <BodyTextBold>Answer:</BodyTextBold>
            <BodyText>{question.answer ?? ''}</BodyText>
          </ListElement>
        )
      }
      {isLoggedIn() && question !== '' ? (
        <AnswerContainer>
          <BodyText>Answer this question:</BodyText>
          <InputArea onChange={(e) => setAnswer(e.target.value)} value={answer} />
          <ActionButton onClick={() => addAnswer()}>Submit Answer</ActionButton>
        </AnswerContainer>
      ) : <></>}
    </QuestionContainer>
  );
};

export default Question;
