import axios from 'axios';

// types 
import { UserInfo } from 'types';

const BASE_URL = 'http://localhost:8100'

export const socialLogin = async (userInfo: UserInfo) => {

    const token = await axios.post('/api/auth/login', userInfo)
        .then(response => response.headers.authorization);

    return token

}