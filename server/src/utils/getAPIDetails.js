const getDrivers = require('../controllers/getDrivers');

const getAPIDetails = async (id) => {
    const allDrivers = await getDrivers();
    let driverDetail = [];

    if (id > 0 && id < 509) {
        allDrivers.forEach(driver => {
            if (driver.driver_id === id) {
                driverDetail.push(driver)
            }
        })  
        return driverDetail
    } else {
        return ({ error: error.message })
    }
}

module.exports = getAPIDetails;