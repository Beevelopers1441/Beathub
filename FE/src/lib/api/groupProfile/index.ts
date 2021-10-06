import axios from 'axios';

import { UpdateBand } from 'types';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');

const getGroupProfile = async (bandId: Number) => {
  const url = `${BASE_URL}bands/{bandId}`;
  const response = await axios.get(url, {
    params: {
      bandId: bandId
    }
  });
  return response
};

// 그룹 팔로우
const followGroup = async (bandId: Number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}follow/band/${bandId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 그룹 언팔로우
const unFollowGroup = async (bandId: Number) => {
  const config: any = {
    method: 'DELETE',
    url:`${BASE_URL}unfollow/band/${bandId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 팔로우 목록 조회
const getGroupFollowList = async (bandId: Number) => {
  const config: any = {
    method: 'GET',
    url:`${BASE_URL}follow/band/${bandId}`,
  }
  return await axios(config);
};


// 그룹 프로필 수정
const updateGroupProfile = async (bandId: Number, payload: UpdateBand) => {

  const data = {
    bandProfileImage: payload.bandProfileImage,
    introduction: payload.introduction,
    name: payload.name,
  }

  const config: any = {
    method: 'PUT',
    data,
    url:`${BASE_URL}bands/${bandId}`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


export { getGroupProfile, followGroup, unFollowGroup, getGroupFollowList, updateGroupProfile };