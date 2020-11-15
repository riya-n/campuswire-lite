/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import {
  InputBox, Heading, BodyText, ActionButton, AccountPage,
} from '../styles';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const login = async () => {
    try {
      await axios.post('/account/login', { username, password });
      history.push('/');
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to Log In');
    }
  };

  return (
    <AccountPage>
      <Heading>Log In</Heading>
      <BodyText>Username:</BodyText>
      <InputBox onChange={(e) => setUsername(e.target.value)} />
      <BodyText>Password:</BodyText>
      <InputBox onChange={(e) => setPassword(e.target.value)} />
      <ActionButton type="submit" onClick={() => login()}>Log In</ActionButton>
      <BodyText>
        {"Don't have an account? "}
        <Link to="/signup">Sign up here!</Link>
      </BodyText>
    </AccountPage>
  );
};

export default LogIn;
