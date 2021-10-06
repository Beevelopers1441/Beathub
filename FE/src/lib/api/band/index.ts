import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');


// 밴드 가입신청
const bandApply = async (bandId: Number, instrument: string) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}bandMember/${bandId}`,
    data: {
      instrument,
    },
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};

// 밴드 정보
const getBandInfosAPI = async (bandId: number) => {
  const config: any = {
    method: 'GET',
    url:`${BASE_URL}bands/${bandId}`,
    headers: {
      Authorization: TOKEN,
    }
  };
  return await axios(config);
}

// 밴드 가입 신청한 정보
const getWaitingBandMembersAPI = async () => {
  const config: any = {
    method: 'GET',
    url:`${BASE_URL}bandMember/apply`,
    headers: {
      Authorization: TOKEN,
    }
  };
  return await axios(config);
};

// 밴드 가입 승인
const approveAPI = async (bandId: number, userId: number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}bandMember/approve`,
    data: {
      bandId,
      userId,
    },
    headers: {
      Authorization: TOKEN,
    }
  };
  return await axios(config);
};

// 밴드 가입 거절
const disapproveAPI = async (bandId: number, userId: number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}bandMember/deny`,
    data: {
      bandId,
      userId,
    },
    headers: {
      Authorization: TOKEN,
    }
  };
  return await axios(config);
};


export { bandApply, getBandInfosAPI, getWaitingBandMembersAPI, approveAPI, disapproveAPI };