const { Driver } = require('../db.js');

const postDriver = async (req, res) => {
   try {
    const { driver_name, lastname, nationality, image, dob, description, teams } = req.body; //'teams' es un array de strings con los equipos que el usuario quiere adosar al driver creado.

    if(!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
        throw new Error ('Faltan campos. Verifique la información enviada.')
    }

    const newDriver = await Driver.create({
            driver_name,
            lastname,
            nationality,
            image,
            dob,
            description
    })

    newDriver.add(teams);
    
    return newDriver;
   } catch (error) {
    // console.error('Error al crear el driver indicado.')
    return ({ message: 'Error al crear el driver indicado.' });
   }
}
module.exports = postDriver;