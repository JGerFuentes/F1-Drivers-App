const { Driver, Team } = require('../db.js');
const stringsToPks = require('../utils/stringsToPks.js');

const postDriver = async (req, res) => {
   try {
    const { driver_name, lastname, nationality, image, dob, description, teams } = req.body; 

    if(!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
        throw new Error ('Missing fields. Please, double-check your inputs 👁‍🗨⌨')
    };

    const newDriver = await Driver.create({
        driver_name,
        lastname,
        nationality,
        image,
        dob,
        description
    });

    const arrayPkTeams = await stringsToPks(teams);

    arrayPkTeams.forEach(team => newDriver.addTeam(team)); 
    
    if (newDriver) {
        return newDriver;
    } else {
        throw new Error ('Error while trying to create the driver ☠')
    }
   } catch (error) {
        return ({ error: error.message });
   }
}
module.exports = postDriver;