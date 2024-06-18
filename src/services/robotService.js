import axios from 'axios';

const BACKEND_URL = `http://${process.env.BACKEND_URL}`
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
