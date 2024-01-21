const getDrivers = require('../controllers/getDrivers');

const getAPIDetails = async (id) => {
    try {
        const allDrivers = await getDrivers();
        let driverDetail = [];
    
        if (id > 0 && id < 509) {
            allDrivers.forEach(driver => {
                if (driver.driver_id === id) {
                    driverDetail.push(driver)
                }
            })  
            return driverDetail;
        } else {
            throw new Error ('Invalid ID. Please, try another one.')
        }
    } catch (error) {
        throw error;
    }
}

module.exports = getAPIDetails;