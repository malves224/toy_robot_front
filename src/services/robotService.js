import axios from 'axios';

const BACKEND_URL = `http://${process.env.VUE_APP_BACKEND_URL}`;
const apiUrl = `${BACKEND_URL}/robots`;

const robotService = {
  getAllRobots: async () => {
      const response = await axios.get(apiUrl, {
        headers: {
          'Access-Control-Allow-Origin': 'http://159.65.236.207:8080',
        }
      });
      return response.data;
  }
};

export default robotService;
