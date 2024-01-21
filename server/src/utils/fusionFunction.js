//Purpose: To build an "allDriversArray" with a homogeneous structure.
const fusionFunction = (dbDriversArray) => {
    const fusedTeamsArray = dbDriversArray.reduce((accumulatorArray, driver) => {
        const existingDriver = accumulatorArray.find((element) => element.pk === driver.pk);

        if (!existingDriver) {
            const newDriver = {
                pk: driver.pk, 
                driver_id: driver.pk, //Created for rendering purposes.
                driver_name: driver.driver_name,
                lastname: driver.lastname,
                image: driver.image,
                nationality: driver.nationality,
                dob: driver.dob,
                description: driver.description,
                teams: [driver["Teams.team_name"]],
                origin: 'db'
            };
            accumulatorArray.push(newDriver);
        } else {
            existingDriver.teams.push(driver["Teams.team_name"]);
        }

        return accumulatorArray;
    }, []);

    return fusedTeamsArray;
};

module.exports = fusionFunction;