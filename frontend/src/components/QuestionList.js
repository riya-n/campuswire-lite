/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { ActionButton, BodyText, ListElement, QuestionListContainer } from '../styles';
import AddQuestion from './AddQuestion';

const QuestionList = (questions, setCurrQuestion, setPopUp) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();

  const onClick = () => {
    if (loggedIn) {
      setPopUp(true);
    } else {
      history.push('/login');
    }
  };

  return (
    <QuestionListContainer>
      <ActionButton onClick={() => onClick()}>
        {loggedIn ? 'Add new Question +' : 'Log in to submit a question'}
      </ActionButton>
      <ul>
        {
          // questions.map(({ questionText, _id }) => (
          //   <ListElement key={_id}>{questionText}</ListElement>
          // ))
        }
      </ul>
    </QuestionListContainer>
  );
};

export default QuestionList;
