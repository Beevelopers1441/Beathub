import axios from 'axios';

// types 
import { UserInfo } from 'types';

export const socialLogin = async (userInfo: UserInfo) => {
    console.log(userInfo)
    const response = await axios.post('http://localhost:8100/api/auth/login', userInfo)
        // .then(response => {
        //     console.log(response)
        // });
    
        // .then(response => response.headers.authorization);

    return response

}