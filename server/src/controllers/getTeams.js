const { Team } = require('../db.js');

const getTeams = async () => {
    try {
        const allTeams = await Team.findAll({
            raw: true, //Utilizo este método para filtrar la metadata que envía Sequelize de la instancia del modelo.
            attributes: ['team_name'] //Recupero sólo los nombres de los teams almacenados en la DB.
        }); 
        // console.log('Teams recuperados con éxito');
        console.log(allTeams);
        return allTeams; //Retorno el arreglo con todos los teams.
    } catch (error) {
        console.error('Error al obtener los equipos', error.message);
        return ({ message: 'Error en la recuperación de los equipos'});
    }
}

module.exports = getTeams;
getTeams();