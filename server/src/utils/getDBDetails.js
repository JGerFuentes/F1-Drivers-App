const getDrivers = require('../controllers/getDrivers');

const getDBDetails = async (id) => {
    const allDrivers = await getDrivers();
    let driverDetail = []
    
    allDrivers.forEach(driver => {
        if (driver.pk === id){
            driverDetail.push(driver)
        }
    })
    return driverDetail;
}

module.exports = getDBDetails;