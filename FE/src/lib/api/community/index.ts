import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const getAllBandPosts = async () => {
  const url = `${BASE_URL}/api/posts/bands`;
  const response = await axios.post(url);
  console.log(response);
};

const getAllMemberPosts = () => {
  
};

export { getAllBandPosts, getAllMemberPosts };