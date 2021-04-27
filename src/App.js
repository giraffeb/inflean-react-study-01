import React, { Component, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './components/template/loginForm';

function App(props) {
  useEffect(() => {
    console.log('App Effect Call it');
    console.log(props);
  }, [props]);

  return (
    <>
      <div className="App">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
