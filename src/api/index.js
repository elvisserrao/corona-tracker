import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return null;
  }
};

export { fetchData as default };
