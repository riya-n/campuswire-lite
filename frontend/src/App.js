/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const signup = async () => {
    try {
      await axios.post('/account/signup', { username, password });
      setMsg('sign up is successful');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <input onChange={(e) => setUsername(e.target.value)} />
      <input onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" onClick={() => signup()}>Sign Up</button>
      {msg}
    </>
  );
};

export default App;
