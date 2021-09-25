import axios from 'axios';

// types 
import { UserInfo } from 'types';

export const socialLogin = async (userInfo: UserInfo) => {

    const token = await axios.post('http://localhost:8100/api/auth/login', userInfo)
        .then(response => response.headers.authorization);

    return token

}