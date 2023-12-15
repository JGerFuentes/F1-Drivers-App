const axios = require('axios');
const getApiData = require('../utils/getApiData');
const { Driver } = require('../db.js');

//Obtención y presentación de drivers con origen en la API y en la DB
const getDrivers = async() => {
    try {
        
        const { data } = await getApiData();
        // console.log(data);


        // const { data } = await getApiData();
        // const { name, image, teams } = data;
        // const myApiDrivers = {
        //     name: name.forename,
        //     lastname: name.surname,
        //     image: image.url,
        //     teams: teams.split(',')
        // }

        // const myDBDrivers = await Driver.findAll({
        //     attributes: ['name', 'lastname','image','teams']
        // })

        // const allDrivers = myApiDrivers.concat(myDBDrivers);
        // return allDrivers;

        // return myApiDrivers

    } catch (error) {
        return (error.message)
    }
}
module.exports = getDrivers;

getDrivers();































// //Parámetro para el paginado:
// const ITEMS_PER_PAGE = 9;

// const getDrivers = async (req, res) => {
//     try {
        
//         //Captura del id de la página de navegación + definición del valor del índice por defecto.
//         const page_id = Number(req.query.page) || 1;

//         //Determinación del rango de índices para la paginación.
//         const startIndex = (page_id - 1 ) * ITEMS_PER_PAGE;
//         const endIndex = startIndex + ITEMS_PER_PAGE;
        
//         //Solicitud a la API.
//         const { data } = await axios(`${URL}`);

//         //Paginación de la respuesta obtenida (arreglo de promesas)
//         let arrayDrivers = data.slice(startIndex, endIndex);
        // arrayDrivers = arrayDrivers.map(driver => {
        //     return ({
        //         id: driver.id,
        //         name: driver.name.forename,
        //         lastname: driver.name.surname,
        //         teams: driver.teams.split(', '),
        //         image: driver.image.url
        //     })
        // })
        // console.log(arrayDrivers);
// let arrayDrivers = data.slice(1, 9);

//         arrayDrivers = arrayDrivers.map(driver => {
//             return ({
//                 id: driver.id,
//                 name: driver.name.forename,
//                 lastname: driver.name.surname,
//                 teams: driver.teams.split(', '),
//                 image: driver.image.url
//             })
//         })
    // console.log(arrayDrivers);





//     } catch (error) {
        
//     }
// }

// module.exports = getDrivers;