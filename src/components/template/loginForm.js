import React, { Component } from 'react';

const LoginForm = () => {
  function submit(e) {
    console.log('call it');
    e.preventDefault();
  }
  return (
    <>
      <form onSubmit={submit}>
        <h3>login</h3>
        <div>
          <label htmlFor="id">
            <span>id</span>
            <input id="id" type="text" name="id" />
          </label>
        </div>
        <dv>
          <label htmlFor="pw">
            <span>pw</span>
            <input id="pw" type="text" name="pw" />
          </label>
        </dv>
        <button type="submit">click</button>
      </form>
    </>
  );
};

export default LoginForm;
