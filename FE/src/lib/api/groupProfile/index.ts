import axios from 'axios';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const getGroupProfile = async (bandId: Number) => {
  const url = `${BASE_URL}api/bands/{bandId}`;
  const response = await axios.get(url, {
    params: {
      bandId: bandId
    }
  });

  return response
};


export { getGroupProfile };