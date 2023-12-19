const getApiData = require('./getApiData');
const { Team } = require ('../db');

const getApiTeams = async () => {
    try {
        let allApiTeams = new Set(); //Defino un Set para evitar almacenar elementos repetidos.
        const data = await getApiData(); //Almaceno en 'data' el valor de la ejecución de la función 'getApiData()'
        
        data.forEach(driver => {
            if (driver.teams) { //Para evitar aquellos drivers sin propiedad 'teams'.
                let driverTeams = driver.teams.match(/\b[A-Za-z]+\b/g); //Método de matcheo con una REGEX que me permite discriminar por palabras enteras (sólo letras) y separarlas de cualquier otro símbolo.
                driverTeams.forEach(team => allApiTeams.add(team)); //Recorro los teams recuperados de cada driver y lo añado al Set 'allApiTeams'.
            }
        });
        // console.log('Recuperación de los equipos realizada con éxito');

        const allTeams = [...allApiTeams]; //Conversión del Set en un nuevo array con todos los equipos disponibles en la API. Array de strings.
        
        //Inicio otro try/catch para realizar la carga asíncrona de los datos en la DB.
        try { 
            const elementsToObjects = allTeams.map(team => ({ team_name: team })) //Como el método 'bulkCreate' trabaja con arrays de objetos, necesito transformar la información contenida en el array 'allTeams', respetando la estructura de mi modelo.
            await Team.bulkCreate(elementsToObjects);
            
            // console.log('Creación de los equipos cursada con éxito');
        } catch (error) {
            console.error('Error al crear los equipos:', error.message);
            // throw new Error('Error al crear los equipos');
            // return ({ message: 'Error al crear los equipos' });
        }
    } catch (error) {
        console.error('Solicitud de equipos imposible de cursar', error.message);
        // throw new Error('Solicitud de equipos imposible de cursar');
        // return ({ message: 'Solicitud de equipos imposible de cursar'});
    }
}

module.exports = getApiTeams;