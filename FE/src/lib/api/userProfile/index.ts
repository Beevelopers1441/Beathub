import axios from 'axios';
import { config } from 'process';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('token');

const getUserProfile = async (userId: Number) => {
  const url = `${BASE_URL}/api/user/{userId}`;
  const response = await axios.get(url, {
    params: {
      userId: userId
    }
  });
  return response
};

// 개인 팔로우
const followUser = async (toUserId: Number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}/api/follow/${toUserId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 개인 언팔로우
const unFollowUser = async (toUserId: Number) => {
  const config: any = {
    method: 'DELETE',
    url:`${BASE_URL}/api/follow/${toUserId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};



export { getUserProfile, followUser };