const { Team } = require('../db');

const getTeams = async () => {
    try {
        const allTeams = await Team.findAll() //Busco a todos los equipos almacenados en la DB
        console.log('Queda a vuestra disposición la lista de equipos completa. ¡Hela aquí!');
        console.log(allTeams);
        // return allTeams; //Retorno el arreglo con todos los teams.
    } catch (error) {
        console.error('Error al obtener los equipos', error.message);
        // throw new Error('Error al obtener los equipos');
        // return ({ message: 'Error en la recuperación de los equipos'});
    }
}
getTeams();
module.exports = getTeams;