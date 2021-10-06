import axios from 'axios';

import { UpdateUser } from 'types';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');

const getUserProfile = async (userId: Number) => {
  const url = `${BASE_URL}user/{userId}`;
  const response = await axios.get(url, {
    params: {
      userId: userId
    }
  });
  return response
};

// 개인 팔로우
const followUser = async (toUserId: number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}follow/user/${toUserId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 개인 언팔로우
const unFollowUser = async (toUserId: number) => {
  const config: any = {
    method: 'DELETE',
    url:`${BASE_URL}unfollow/user/${toUserId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 팔로우 목록 조회
const getFollowList = async (toUserId: number) => {
  const config: any = {
    method: 'GET',
    url:`${BASE_URL}follow/user/${toUserId}`,
  }
  return await axios(config);
};

// 개인 프로필 수정
const updateUserProfile = async (userId: Number, payload: UpdateUser) => {

  const data = {
    imageUrl: payload.imageUrl,
    introduction: payload.introduction,
    name: payload.name,
  }

  const config: any = {
    method: 'PUT',
    data,
    url:`${BASE_URL}user/${userId}`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


export { getUserProfile, followUser, unFollowUser, getFollowList, updateUserProfile };