import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'modules/user/actions';

import axios from 'axios';

function GetUserInfo() {

  const dispatch = useDispatch();
  const token = useSelector(state => state);
  axios.post('http://localhost:8200/api/user', token)
  .then(response => console.log(response));

}

export default GetUserInfo