const axios = require('axios');
const DRIVERS_API = 'http://localhost:5000/drivers';

const getApiData = async () => {
  try {
    const { data } = await axios(`${DRIVERS_API}`);
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = getApiData;