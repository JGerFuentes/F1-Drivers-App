const getDBDetails = require('../utils/getDBDetails');
const getAPIDetails = require('../utils/getAPIDetails');

const uuidv4_Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const getDetails = async (id) => {
    try {
        let driverDetail = [];

        if(uuidv4_Regex.test(id)) {
            driverDetail = await getDBDetails(id);
        } else {
            let idToNumber = Number(id);
            driverDetail = await getAPIDetails(idToNumber);
        }

        if (driverDetail.length > 0){
            return driverDetail;
        } else {
            throw new Error ('Detail not found.');
        }
    } catch (error) {
        throw error;
    }
}

module.exports = getDetails;
