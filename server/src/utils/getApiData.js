const axios = require('axios');
const DRIVERS_API = 'http://localhost:5000/drivers';

const getApiData = async () => {
  try {
    const { data } = await axios(`${DRIVERS_API}`);
    // console.log(data);
    return data;
  } catch (error) {
      console.error('Error en la solicitud a la API', error);
      throw error;
    // return ({ message: 'Error en la recuperación de datos desde la API'});
  }
};

module.exports = getApiData;