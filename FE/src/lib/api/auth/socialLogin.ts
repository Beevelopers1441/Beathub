import axios from 'axios';

// types 
import { UserInfo } from 'types';

// 로그인 정보 보내서 토큰 받기
export const socialLogin = async (userInfo: UserInfo) => {
    const response = await axios.post('http://localhost:8100/api/auth/login', userInfo)

    return response
}

// 토큰 보내서 유저 정보 받기
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

// 처음 로그인한 유저인지 알아보기
export async function isFirst(token:string) {
    
    const config:any = {
        method: 'GET',
        url: 'http://localhost:8200/api/user/first',
        headers: {
            Authorization: token
        }
    }

    return await axios(config)
}