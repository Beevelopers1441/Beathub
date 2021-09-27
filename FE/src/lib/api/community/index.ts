import axios from 'axios';

interface IBandPost {
  title: string;
  inst: string;
  content: string;
}

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('token');

const getBandPosts = async () => {
  const url = `${BASE_URL}/api/posts/bands`;
  const response = await axios.get(url);

  return response
};

const getMemberPosts = async () => {
  const url = `${BASE_URL}/api/posts/members`;
  const response = await axios.get(url);
  
  return response
};

const setBandPost = async (payload: IBandPost) => {
  const { title, inst, content } = payload;
  const data = {
    title,
    tag: inst,
    content,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}/api/posts/members`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};


const setMemberPost = async (payload: IBandPost) => {
  const { title, inst, content } = payload;
  const data = {
    title,
    tag: inst,
    content,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}/api/posts/members`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

export { getBandPosts, getMemberPosts, setBandPost, setMemberPost };