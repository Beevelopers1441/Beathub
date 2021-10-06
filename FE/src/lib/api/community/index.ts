import axios from 'axios';

interface IMemberPost {
  title: string;
  inst: string;
  content: string;
}
interface IBandPost {
  title: string;
  inst: string;
  bandName: string;
  content: string;
}

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const TOKEN = localStorage.getItem('userToken');

/* Member */
const getMemberPosts = async () => {
  const url = `${BASE_URL}posts/members`;
  const response = await axios.get(url);
  
  return response
};

const setMemberPost = async (payload: IMemberPost) => {
  const { title, inst, content } = payload;
  const data = {
    title,
    tag: inst,
    content,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/members`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

/* Band */
const getBandPosts = async () => {
  const url = `${BASE_URL}posts/bands`;
  const response = await axios.get(url);

  return response
};

const setBandPost = async (payload: IBandPost) => {
  const { title, inst, bandName, content } = payload;
  const data = {
    title,
    tag: inst,
    bandName,
    content,
  }

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/bands`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};




const getMemberPost = async (postId: number) => {
  const url = `${BASE_URL}posts/members/${postId}`;
  const response = await axios.get(url);

  return response
};

const getBandPost = async (postId: number) => {
  const url = `${BASE_URL}posts/bands/${postId}`;
  const response = await axios.get(url);

  return response
};

// comment
const setComment = async (postId: number, content: string) => {
  const data = { content, };

  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/${postId}`,
    data,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

// likes
const setLikeAPI = async (postId: number) => {
  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/${postId}/like`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

const setUnlikeAPI = async (postId: number) => {
  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/${postId}/unlike`,
    headers: {
      Authorization: TOKEN,
    },
  }
  return await axios(config);
};

const getBandInfoAPI = async (bandId: number) => {
  const config: any = {
    method: 'GET',
    url: `${BASE_URL}bands/${bandId}`,
  };
  return await axios(config);
};

// delete
const deletePostAPI = async (postId: number) => {
  const config: any = {
    method: 'DELETE',
    url: `${BASE_URL}posts/${postId}`,
    headers: {
      Authorization: TOKEN,
    },
  };
  return await axios(config);
};

// recruiting toggle
const toggleRecruiting = async (postId: number) => {
  const config: any = {
    method: 'POST',
    url: `${BASE_URL}posts/changeRecruiting/${postId}`,
    headers: {
      Authorization: TOKEN,
    },
  };
  return await axios(config);
};


export { getMemberPosts, getMemberPost, setMemberPost, getBandPosts, getBandPost, 
  setBandPost, setComment, setLikeAPI, setUnlikeAPI, getBandInfoAPI, deletePostAPI,
  toggleRecruiting, };