import axios from 'axios';

interface IBandPost {
  title: string;
  inst: string;
  content: string;
}

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('token');

const getAllBandPosts = async () => {
  const url = `${BASE_URL}/api/posts/bands`;
  const response = await axios.post(url);
  console.log(response);
};

const getAllMemberPosts = () => {
  
};

const setBandPost = (payload: IBandPost) => {
  const { title, inst, content } = payload;
  const data = {
    title,
    tag: inst,
    content,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}/api/posts/bands`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }

  const response = axios(config);
  console.log(response)

};

export { getAllBandPosts, getAllMemberPosts, setBandPost };