import axios from 'axios';

// types 
import { UserInfo } from 'types';

export const socialLogin = async (userInfo: UserInfo) => {
    const response = await axios.post('http://localhost:8100/api/auth/login', userInfo)

    return response

}

export async function getUserInfo(token:string) {
    
    const config:any = {
        method: 'POST',
        url: 'http://localhost:8200/api/user',
        headers: {
            Authorization: token
        }
    }

    return await axios(config)
}