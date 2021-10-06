import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const getSearchResult = async (keyword: string) => {
  const config: any = {
    method: 'GET',
    url:`${BASE_URL}search/${keyword}`
  };
  return await axios(config);
};

export { getSearchResult };