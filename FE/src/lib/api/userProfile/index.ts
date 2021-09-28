import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const getUserProfile = async (userId: Number) => {
  const url = `${BASE_URL}/api/user/{userId}`;
  const response = await axios.get(url, {
    params: {
      userId: userId
    }
  });
  console.log(response);
};


export { getUserProfile };