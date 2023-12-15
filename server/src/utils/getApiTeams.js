const getApiData = require('./getApiData');

const getApiTeams = async () => {
    try {
        let allApiTeams = new Set(); //Defino un Set para evitar almacenar elementos repetidos.
        const data = await getApiData(); //Almaceno en 'data' el valor de la ejecución de la función 'getApiData()'
        
        data.forEach(driver => {
            try {
                let driverTeams = driver.teams.match(/\b[A-Za-z]+\b/g); //Método de matcheo con una REGEX que me permite discriminar por palabras enteras (sólo letras) y separarlas de cualquier otro símbolo.
                driverTeams.forEach(team => allApiTeams.add(team)); //Recorro los teams recuperados de cada driver y lo añado al Set 'allApiTeams'.
            } catch (error) {
                throw new Error (`Los teams del driver con id ${driver.id} no se encuentran definidos`);
            }
        });

        const allTeams = [...allApiTeams] //'Spread syntax', se utiliza para descomponer o expandir elementos de una estructura iterable (como un Set) en un nuevo array.
        
        return allTeams;

    } catch (error) {
        throw new Error (`Solicitud imposible de cursar`)
    }
}

module.exports = getApiTeams;