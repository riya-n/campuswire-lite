/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  ActionButton, ListElement, QuestionListContainer,
} from '../styles';

const QuestionList = (props) => {
  const {
    questions, setCurrQuestion, setPopUp, isLoggedIn,
  } = props;
  const history = useHistory();

  return (
    <QuestionListContainer>
      {
        isLoggedIn()
          ? (
            <ActionButton onClick={() => setPopUp(true)}>Add new Question +</ActionButton>
          ) : (
            <ActionButton onClick={() => history.push('/login')}>Log in to submit a question</ActionButton>
          )
      }
      {
          questions.map((question) => (
            // eslint-disable-next-line no-underscore-dangle
            <ListElement key={question._id} onClick={() => setCurrQuestion(question)}>
              {question.questionText}
            </ListElement>
          ))
        }
    </QuestionListContainer>
  );
};

export default QuestionList;
