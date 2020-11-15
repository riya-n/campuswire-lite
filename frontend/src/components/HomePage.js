/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { BodyText, SubHeading, PageHeader, PageBody, PageContainer } from '../styles';
import QuestionList from './QuestionList';
import Question from './Question';
import AddQuestion from './AddQuestion';

const HomePage = () => {
  const [msg, setMsg] = useState('hey you');
  const [currQuestion, setCurrQuestion] = useState('');
  const [popUp, setPopUp] = useState(false);
  const [questions, setQuestions] = useState([]);

  const hi = async () => {
    const loggedIn = await axios.post('/account/');
    if (loggedIn.status === 200) {
      setMsg(`Hi ${loggedIn.data} Log Out`);
    }
  };

  const logout = () => {

  };

  return (
    <PageContainer>
      <PageHeader>
        <SubHeading>Campuswire Lite</SubHeading>
        <BodyText onClick={() => logout()}>{msg}</BodyText>
      </PageHeader>
      {
        popUp ? <AddQuestion setPopUp={setPopUp} /> : <></>
      }
      <PageBody>
        <QuestionList questions={questions} setCurrQuestion={setCurrQuestion} setPopUp={setPopUp} />
        <Question question={currQuestion} id={currQuestion._id} />
      </PageBody>
    </PageContainer>
  );
};

export default HomePage;
