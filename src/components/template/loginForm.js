import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, CHANGE_USER_ASYNC } from '../../reducer/user';

const LoginForm = (props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function submit(e) {
    console.log('user selector call it');
    console.log(user);
    e.preventDefault();
    dispatch({ type: CHANGE_USER_ASYNC, payload: { id, pw } });
    console.log('after dispatch');
    console.log(user);
  }

  return (
    <>
      <form onSubmit={submit}>
        <h3>login</h3>
        <div>
          <label htmlFor="id">
            <span>id</span>
            <input id="id" type="text" name="id" onChange={(e) => setId(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="pw">
            <span>pw</span>
            <input id="pw" type="text" name="pw" onChange={(e) => setPw(e.target.value)} />
          </label>
        </div>
        <button type="submit">click</button>
      </form>
    </>
  );
};

export default LoginForm;
