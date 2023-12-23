const getDrivers = require('./getDrivers');

const getDetails = async (id) => {
        const allDrivers = await getDrivers();
        let driverDetail = [];

        allDrivers.forEach(driver => {
            if (driver.driver_id === id) {
                if (driver.origin === 'db') {
                    driverDetail.push(driver);
                } else {
                    driverDetail.push(driver);
                }
            }
        })

        if (driverDetail.length > 0){
            return driverDetail
        } else {
            throw new Error ("Something failed while retrieving driver's details")
        }
}

module.exports = getDetails;
