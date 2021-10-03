import axios from 'axios';

// types 
import { UserInfo } from 'types';

const AUTH_BASE_URL = process.env.REACT_APP_AUTH_URL;
const BASE_URL = process.env.REACT_APP_SERVER_URL;

// 로그인 정보 보내서 토큰 받기
export const socialLogin = async (userInfo: UserInfo) => {
    const response = await axios.post(`${AUTH_BASE_URL}login`, userInfo)

    return response
}

// 토큰 보내서 유저 정보 받기
export async function getUserInfo(token:string) {
    
    const config:any = {
        method: 'POST',
        url: `${BASE_URL}user`,
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
        url: `${BASE_URL}user/first`,
        headers: {
            Authorization: token
        }
    }

    return await axios(config)
}