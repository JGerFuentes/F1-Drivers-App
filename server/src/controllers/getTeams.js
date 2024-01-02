const { Team } = require('../db.js');

const getTeams = async () => {
    try {
        const allTeams = await Team.findAll({
            raw: true, //Utilizo este método para filtrar la metadata que envía Sequelize de la instancia del modelo.
            attributes: ['team_name'] //Recupero sólo los nombres de los teams almacenados en la DB.
        }); 
        
        //Si el arreglo se construyó correctamente lo retorno sino, envío un mensaje de error apropiado.
        if (allTeams.length > 0) {
            let arrayTeams = [];
            allTeams.map((team) => {
                arrayTeams.push(team.team_name)
            })
            return arrayTeams;
        } else {
            throw new Error ("Error while trying to retrieve the teams' info. Sorry for the inconvenience 😟");
        }
    } catch (error) {
        return ({ error: error.message });
    }
}

module.exports = getTeams;