const getApiData = require('../utils/getApiData');
const { Driver, Team } = require('../db.js');
const fusionFunction = require('../utils/fusionFunction.js');

const getDrivers = async (req, res) => {
    try {
        //Recuperación de drivers de la API

        //Almaceno el array de objetos en la variable 'apiDrivers'
        let apiDrivers = await getApiData();

        apiDrivers = apiDrivers.map((driver) => {
            //Si el driver no tiene una imagen, le defino una por default.
            if (!driver.image || !driver.image.url) {
                driver.image.url = "https://i.imgur.com/jkYqmU9.png";
            } 
            
            //Si el driver no tiene descripción le asigno un string vacío.
            if (!driver.description) {
                driver.description = '';
            } 

            //REGEX recuperada de la función 'getApiTeams'.
            const regex = /\b((?<!\by\s)\b[A-Za-zÀ-ÖØ-öø-ÿ\s.-]+)\b/g;

            //Controlo la existencia de valores en la propiedad 'teams', si existe los descompongo en un array de strings y lo almacena en la variable 'driverTeams' para asignarlo después. Si no existe la propiedad o está vacía lo declaro como un string vacío.
            let driverTeams = driver.teams ? driver.teams.match(regex) : ''; 

            //Retorno un objeto con todas las propiedades requeridas para cada driver mapeado.
            return {
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

        //Recuperación de drivers de la DB.

        //Almaceno en la variable 'dbDrivers' todo lo que se encuentre en la tabla 'Drivers' de la DB.
        let dbDrivers = await Driver.findAll({
            //Excluyo sólo la columna 'pk' de las propiedades que me interesan.
            attributes: {
                exclude: ['pk']
            }, //['driver_name', 'lastname', 'nationality', 'image', 'dob', 'description']
            //Como no alcanza sólo con asociar el modelo, debo filtrar la respuesta para que me retorne un sólo elemento con una propiedad donde se encuentren todos los teams asociados.
            include: [{
                model: Team, //Asociación con el modelo 'Team'
                attributes: ['team_name'], //Selecciono sólo el atributo 'team_name'
                through: {
                    attributes: [] //Descarto cualquier atributo adicional de la tabla intermedia, que Sequelize incluye por defecto.
                }
            }],
            raw: true
        })
          
        //Aplico la 'fusionFunction' al array obtenido para realizar las modificaciones necesarias y recibir un arreglo con la misma estructura que el de 'apiDrivers'.
        dbDrivers = fusionFunction(dbDrivers);

        //Construyo con spread syntax el arreglo con todos los drivers
        let allDrivers = [...dbDrivers, ...apiDrivers];
        
        //Si el array contiene información lo retorno sino envío un mensaje de error apropiado.
        if (allDrivers.length > 0) {
            return allDrivers;
        } else {
            throw new Error ('Problems while trying to fetch your drivers. Sorry pal 😕');
        }
    } catch (error) {
          return { error: error.message };
    }
};

module.exports = getDrivers;

//Parámetro para el paginado:
        // const ITEMS_PER_PAGE = 9;
//Capturo el id de la página de navegación (índice) o defino un 'defaultvalue' del índice.
        // const page_id = Number(req.query.page) || 1; //! Está tirando error el 'query'.
        // const page_id = 57
        
        //Determino del rango de índices para la paginación.
        // const startIndex = (page_id - 1 ) * ITEMS_PER_PAGE;
        // const endIndex = startIndex + ITEMS_PER_PAGE;

        // console.log('Array de allDrivers ', allDrivers.slice(startIndex, endIndex));

        // return allDrivers.slice(startIndex, endIndex);