const getApiData = require('./getApiData');
const { Team } = require ('../db');

const getApiTeams = async () => {
    try {
        //Defino un Set para evitar almacenar elementos repetidos.
        let allApiTeams = new Set();

        //Almaceno en 'data' el valor de la ejecución de la función 'getApiData()'
        const data = await getApiData(); 
        
        data.forEach(driver => {
            //Condicional para evitar aquellos drivers sin propiedad 'teams'.
            if (driver.teams) { 
                const regex = /\b((?<!\by\s)\b[A-Za-zÀ-ÖØ-öø-ÿ\s.-]+)\b/g; //REGEX que me permite discriminar los equipos contemplando puntos, espacios, guiones y caracteres especiales para descomponer los strings.
                
                let driverTeams = driver.teams.match(regex); //Método de matcheo con la regex.
                
                driverTeams.forEach(team => allApiTeams.add(team)); //Recorro los teams recuperados de cada driver y lo añado al Set 'allApiTeams'.
            }
        });

        //Conversión del Set en un nuevo array con todos los equipos disponibles en la API. Array de strings.
        const allTeams = [...allApiTeams]; 
        
        //Último filtro para eliminar strings combinados con el conector 'y' que se encontraban repetidos en la lista.
        const filterRegex = /\b\p{L}+\s+y\s+\p{L}+\b/gu;

        allFilteredTeams = allTeams.filter(team => !team.match(filterRegex)); 
        

        //Inicio otro try/catch para realizar la carga asíncrona de los datos en la DB.
        try {
            //Como el método 'bulkCreate' trabaja con arrays de objetos, necesito transformar la información contenida en el array 'allTeams', respetando la estructura de mi modelo.
            const elementsToObjects = allFilteredTeams.map(team => ({ team_name: team }));

            await Team.bulkCreate(elementsToObjects);
            
        } catch (error) {
            console.error('Error al crear los equipos en la DB', error.message);
        }
    } catch (error) {
        console.error('Solicitud de equipos imposible de cursar', error.message);
    }
}

module.exports = getApiTeams;