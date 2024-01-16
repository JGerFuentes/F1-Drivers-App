const { Driver, Team } = require('../db.js');
const stringsToPks = require('../utils/stringsToPks.js');

const postDriver = async (req, res) => {
   try {
    //Recupero la información que llega por body.
        //'teams' es un array de strings con los equipos que el usuario quiere adosar al driver creado.
    const { driver_name, lastname, nationality, image, dob, description, teams } = req.body; 

    //Condicional para verificar que ningún campo llegue vacío.
    if(!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
        throw new Error ('Missing fields. Please, double-check your inputs 👁‍🗨⌨')
    }

    //Creación del driver en la DB.
    const newDriver = await Driver.create({
            driver_name,
            lastname,
            nationality,
            image,
            dob,
            description
    })

    //Transformo el array recibido para poder trabajarlo adecuadamente.
    const arrayPkTeams = await stringsToPks(teams)

    //Recorro el array de PKs para ir asociando cada uno de los elementos con el nuevo driver.
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