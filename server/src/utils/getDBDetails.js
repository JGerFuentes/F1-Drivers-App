const getDrivers = require('../controllers/getDrivers');

const getDBDetails = async (id) => {
    try {
        const allDrivers = await getDrivers();
        let driverDetail = allDrivers.filter(driver => (driver.pk === id));
        return driverDetail;    
    } catch (error) {
        throw error;
    }
}

module.exports = getDBDetails;