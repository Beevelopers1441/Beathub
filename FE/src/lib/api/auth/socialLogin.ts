import { useEffect } from 'react';
import axios from 'axios';

// types 
import { UserInfo } from 'types';

const BASE_URL = 'http://localhost:3000'

export const socialLogin = (userInfo: UserInfo) => {
    console.log(userInfo)
    // axios.post(`${BASE_URL}/api/auth/login`, userInfo)
    //   .then(response => console.log(response));
}



