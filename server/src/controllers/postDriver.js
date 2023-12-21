const { Driver } = require('../db.js');

const postDriver = async (req, res) => {
   try {
    //Recupero la información que llega por body.
        //'teams' es un array de strings con los equipos que el usuario quiere adosar al driver creado.
    const { driver_name, lastname, nationality, image, dob, description, teams } = req.body; 

    //Condicional para verificar qeu ningún campo llegue vacío.
    if(!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
        throw new Error ('Faltan campos. Verifique la información enviada.')
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

    //Recorro el array de strings 'teams' para ir asociando cada uno de los elementos con el nuevo driver.
    teams.forEach(team => newDriver.addTeam(team)); 
    
    return newDriver;
   } catch (error) {
    return ({ message: 'Error al publicar el driver creado.' });
   }
}
module.exports = postDriver;

//Formato en el que llegaría la información por body:
// {
//     "driver_name": "Oliverio",
//     "lastname": "Trotigordi",
//     "nationality": "rumano",
//     "image": "image_url",
//     "dob": "1987-03-04",
//     "description": "Este corredor es muy bueno cazando caracoles",
//     "teams": ["b01de9a6-dcb0-49aa-b263-c31a01a23884", "cd95f89a-7823-4c14-b249-4fa2fda01f79"] //Son las PK de los elementos del modelo "Teams" de la DB.
// }