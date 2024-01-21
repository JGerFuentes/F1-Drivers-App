const getApiData = require('../utils/getApiData');
const { Driver, Team } = require('../db.js');
const fusionFunction = require('../utils/fusionFunction.js');

const defaultImage = 'https://i.imgur.com/dcYOuPn.jpg'
const regex = /\b((?<!\by\s)\b[A-Za-zÀ-ÖØ-öø-ÿ\s.-]+)\b/g;

const getDrivers = async () => {
    try {
        //Retrieving API drivers
        let apiDriversArray = await getApiData();

        apiDriversArray = apiDriversArray.map((driver) => {
            if (!driver.image || !driver.image.url) {
                driver.image.url = defaultImage;
            } 
            if (!driver.description) {
                driver.description = 'Description not available.';
            } 

            let driverTeams = driver.teams ? driver.teams.match(regex) : ['Teams info not available'];

            return {
                driver_id: driver.id,
                driver_name: driver.name.forename,
                lastname: driver.name.surname,
                image: driver.image.url,
                nationality: driver.nationality,
                dob: driver.dob,
                description: driver.description,
                teams: driverTeams,
                origin: 'api'
            }
        });

        //Retrieving DB drivers
        let dbDriversArray = await Driver.findAll({
            include: [{
                model: Team,
                attributes: ['team_name'],
                through: {
                    attributes: []
                }
            }],
            raw: true
        });

        dbDriversArray = fusionFunction(dbDriversArray);

        let allDriversArray = [...dbDriversArray, ...apiDriversArray];
        
        if (allDriversArray.length > 0) {
            return allDriversArray;
        } else {
            throw new Error ('Problems while trying to fetch your drivers. Sorry pal 😕');
        }
    } catch (error) {
          return { error: error.message };
    }
};

module.exports = getDrivers;