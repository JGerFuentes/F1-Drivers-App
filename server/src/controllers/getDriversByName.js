const getDrivers = require('./getDrivers');

const getDriversByName = async (name) => {
    const allDrivers = await getDrivers();
    const matchingDrivers = [];

    allDrivers.forEach(driver => {
        let driverName = driver.driver_name;
        let driverLastname = driver.lastname;
        name.toLowerCase();

        if (driverName.toLowerCase() === name.toLowerCase() || driverLastname.toLowerCase() === name.toLowerCase()) {
            matchingDrivers.push(driver);
        }
    });

    if (matchingDrivers.length > 0) {
        matchingDrivers.slice(15);
        return matchingDrivers;
    } else {
        throw new Error(`No matches found for the provided name. Check your input or try another one 🏎`);
    }
}

module.exports = getDriversByName;