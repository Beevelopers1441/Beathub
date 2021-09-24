import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'modules/user/actions';

import axios from 'axios';

function GetUserInfo() {

  const dispatch = useDispatch();
  const token = useSelector<any, boolean>(state => state.user.token);
  console.log(token)
  axios.post('/api/user', token)
  .then(response => console.log(response));

  return (
    <>
    </>
  )
}

export default GetUserInfo