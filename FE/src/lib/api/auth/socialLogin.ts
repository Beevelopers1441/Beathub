import { useEffect } from 'react';
import axios from 'axios';

// types 
import { UserInfo } from 'types';

const BASE_URL = 'http://localhost:3000'

const socialLogin = (userInfo: UserInfo) => {

  useEffect(() => {
    console.log(userInfo)
    console.log('성공')

    // axios.post(`${BASE_URL}/api/auth/login`, userInfo)
    //   .then(response => console.log(response));
    
  }, [userInfo]);
}

export default socialLogin;



