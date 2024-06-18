import axios from 'axios';

const BACKEND_URL = `http://159.65.236.207:3000`
const apiUrl = `${BACKEND_URL}/robots`;

const robotService = {
  getAllRobots: async () => {
    try {
      const response = await axios.get(apiUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching robots:', error);
      throw error;
    }
  }
};

export default robotService;
