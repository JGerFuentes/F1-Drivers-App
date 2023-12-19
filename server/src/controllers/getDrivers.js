const getApiData = require('../utils/getApiData');
const { Driver } = require('../db.js');

const getDrivers = async (req, res) => {
    //Parámetro para el paginado:
    const ITEMS_PER_PAGE = 9;

    try {
        //Capturo el id de la página de navegación (índice) o defino un 'defaultvalue' del índice.
        // const page_id = Number(req.query.page) || 1; //! Está tirando error el 'query'.
        const page_id = 57
        
        //Determino del rango de índices para la paginación.
        const startIndex = (page_id - 1 ) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;

        //Recuperación de drivers de la API
        let apiDrivers = await getApiData(); //Almaceno el array de objetos en la variable 'apiDrivers'

        apiDrivers = apiDrivers.map((driver) => {
            if (!driver.image || !driver.image.url) {
                driver.image.url = "https://i.imgur.com/jkYqmU9.png";
            } //Si el driver no tiene una imagen, le defino una por default.
            
            if (!driver.description) {
                driver.description = '';
            } //Si el driver no tiene descripción le asigno un string vacío.

            let driverTeams = driver.teams ? driver.teams.match(/\b[A-Za-z]+\b/g) : []; //Operador ternario para evitar bloque extenso if/else. Controla la existencia de valores en la propiedad 'teams', si existe los descompone en un array de strings y lo almacena en la variable 'driverTeams' para asignarlo después, si no existe la propiedad o está vacía lo declara como un array vacío.

            return { //Retorno un objeto con todas las propiedades requeridas para cada driver mapeado.
                driver_id: driver.id,
                driver_name: driver.name.forename,
                lastname: driver.name.surname,
                image: driver.image.url,
                nationality: driver.nationality,
                dob: driver.dob,
                description: driver.description,
                teams: driverTeams,
                origin: 'api'
            }
        });

        // console.log('--> apiDrivers recuperados con éxito', apiDrivers);

        //Recuperación de drivers de la DB.
        let dbDrivers = await Driver.findAll({ //Almaceno en la variable 'dbDrivers' todo lo que se encuentre en la tabla 'Drivers' de la DB.
            // attributes: ['driver_id', 'driver_name', 'lastname', 'image', 'nationality', 'dob', 'description'],
            attributes: {
                exclude: ['pk'] //Excluyo sólo la columna 'pk' de las propiedades que me interesan.
            }, 
            //Tengo que asociar los teams a cada uno.
            raw: true
        })

        // console.log('--> dbDrivers recuperados con éxito', dbDrivers);


        //Construyo con spread syntax el arreglo con todos los drivers
        let allDrivers = [...apiDrivers, ...dbDrivers];

        // console.log('Array de allDrivers ', allDrivers.slice(startIndex, endIndex));

        return allDrivers.slice(startIndex, endIndex);
    } catch (error) {
        console.error('Problemas al recuperar los drivers', error);
        throw error;
    }
};

module.exports = getDrivers;

getDrivers();