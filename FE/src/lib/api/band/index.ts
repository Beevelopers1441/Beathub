import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');


// 밴드 가입신청
const bandApply = async (bandId: Number) => {
  const config: any = {
    method: 'POST',
    url:`${BASE_URL}bandMember/${bandId}`,
    headers: {
      Authorization: TOKEN,
    }
  }
  return await axios(config);
};


export { bandApply };