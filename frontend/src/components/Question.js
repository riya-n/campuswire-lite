/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';

import {
  BodyText, SubHeading, InputArea, ActionButton, QuestionContainer, ListElement, BodyTextBold,
} from '../styles';

const Question = (question, id) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [answer, setAnswer] = useState('');

  const addAnswer = async () => {
    try {
      await axios.post('/questions/answer', { answer, _id: id }); // TODO: what about the id?
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to Add Answer');
    }
  };

  return (
    <QuestionContainer>
      <ListElement>
        <SubHeading>{question.questionText ?? ''}</SubHeading>
        <BodyTextBold>Author:</BodyTextBold>
        <BodyText>{question.author ?? ''}</BodyText>
        <BodyTextBold>Answer:</BodyTextBold>
        <BodyText>{question.answer ?? ''}</BodyText>
      </ListElement>
      {loggedIn ? (
        <>
          <BodyText>Answer this question:</BodyText>
          <InputArea onChange={(e) => setAnswer(e.target.value)}>{answer}</InputArea>
          <ActionButton onClick={() => addAnswer()}>Submit Answer</ActionButton>
        </>
      ) : <></>}
    </QuestionContainer>
  );
};

export default Question;
