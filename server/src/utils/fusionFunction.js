//Esta función se va a encargar de aplicar un método 'reduce' al array recibido para recorrer cada uno de sus elementos, acumular un resultado y reducir el array a un solo valor que cumpla con los criterios establecidos.
//Este método recibe dos argumentos: una callback y un array vacío como valor inicial para el acumulador.
    //La callback, a su vez, va a tener dos argumentos también:
        //"accumulatorArray": Es un acumulador (ya incializado) que se va actualizando en cada iteración y que va a almacenar los drivers combinados.
        //"driver": Es el currentElement o elemento actual del "dbDriversArray" que se procesa en cada iteración del método.
const fusionFunction = (dbDriversArray) => {
    //Creamos una variable "fusedTeamsArray" que almacenará el valor de retorno del método 'reduce' y aplicamos este último al array recibido por parámetro.
    const fusedTeamsArray = dbDriversArray.reduce((accumulatorArray, driver) => {
        //Creamos una variable para aplicar el método 'find' al "accumulatorArray". Este métdodo devuelve el primer elemento del array que cumple con una condición establecida. Si ningún elemento cumple con la condición, devuelve un 'undefined'.
        //Buscamos en el "accumulatorArray" la condición de existencia de un elemento con el mismo 'driver_id' que el driver actual de "dbDriversArray". Si existe, "existingDriver" tomará el valor de ese driver encontrado, sino su valor será 'undefined'.
        const existingDriver = accumulatorArray.find((element) => element.pk === driver.pk);
  
        if (!existingDriver) {
            // Si no existe el elemento (o sea que el valor de 'existingDriver' es 'undefined'), creamos un nuevo objeto con todas las propiedades deseadas más la nueva propiedad 'teams', cuyo valor es igual a un array con el valor de la propiedad 'Teams.team_name' del "dbDriversArray".
            const newDriver = {
                pk: driver.pk, 
                driver_id: driver.pk,
                driver_name: driver.driver_name,
                lastname: driver.lastname,
                image: driver.image,
                nationality: driver.nationality,
                dob: driver.dob,
                description: driver.description,
                teams: [driver["Teams.team_name"]],
                origin: 'db'
            };
            //Este nuevo objeto se pushea al "accumulatorArray".
            accumulatorArray.push(newDriver);
        } else {
            // Si ya existe un driver con el mismo 'driver_id', agregamos el valor de 'Teams.team_name' al array de la propiedad 'teams' ya existente.
            existingDriver.teams.push(driver["Teams.team_name"]);
        }
        //Retornamos el "accumulatorArray" actualizado después de procesar el elemento actual.
        return accumulatorArray;
    }, []);
    
    //Retornamos el array "fusedTeamsArray" que finalmente contiene todos los drivers procesados según el criterio establecido.
    return fusedTeamsArray;
};

module.exports = fusionFunction;