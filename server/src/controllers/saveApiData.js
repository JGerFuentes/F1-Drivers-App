const axios = require('axios');
const URL = 'http://localhost:5000/drivers';

const saveApiData = async () => {
    try {
        let i = 0;
        let drivers = [];

        while (i < 20) {
            let apiData = await axios(`${URL}/${i}`);
            drivers.push(apiData);
            i++;
        }
        
    } catch (error) {
        
    }
}