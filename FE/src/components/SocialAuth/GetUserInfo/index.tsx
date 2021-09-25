import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from 'modules/user/actions';

import axios from 'axios';

function GetUserInfo() {

  const dispatch = useDispatch();
  
  const token = useSelector(state => state);

  const config:any = {
    method: 'POST',
    url: 'http://localhost:8200/api/user',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // const headers = {
  //   'Authorization': token
  // }
  axios(config)
  .then(response => console.log(response));
  // axios.post('http://localhost:8200/api/user', {headers})

}

export default GetUserInfo