/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import {
  InputBox, Heading, BodyText, ActionButton, AccountPage,
} from '../styles';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signup = async () => {
    try {
      await axios.post('/account/signup', { username, password });
      history.push('/');
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to Sign Up');
    }
  };

  return (
    <AccountPage>
      <Heading>Sign Up</Heading>
      <BodyText>Username:</BodyText>
      <InputBox onChange={(e) => setUsername(e.target.value)} />
      <BodyText>Password:</BodyText>
      <InputBox onChange={(e) => setPassword(e.target.value)} />
      <ActionButton type="submit" onClick={() => signup()}>Sign Up</ActionButton>
      <BodyText>
        {'Already have an account? '}
        <Link to="/login">Log in here!</Link>
      </BodyText>
    </AccountPage>
  );
};

export default SignUp;
