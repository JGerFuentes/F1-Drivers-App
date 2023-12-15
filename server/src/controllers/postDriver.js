const { Driver } = require('../db.js');
const getApiData = require('../utils/getApiData.js')

const postDriver = async (req, res) => {
    try {
        //Obtenemos por body los campos completados por el cliente en el Form.
        const { name, lastname, nationality, image, dob, description, teams } = req.body;
        
        //Verificación de campos del Form.
        if (!name || !lastname || !nationality || !image || !dob || !description || !teams) {
            return res.status(400).json({ message: 'Faltan datos, por favor complete todos los campos.' })
        }

        //Consultamos su existencia en la API:
        const apiData = await getApiData().drivers.name.forename

        apiData.map( driverName => {

        })

        if (name === driverName) {
            return res.status(409).json({ message: 'El corredor proporcionado ya existe' });
        } else {
            let id = 508;
            let drivers = [];

            //Creación del nuevo driver en la DB.
            const [newDriver, created] = await Driver.findOrCreate(
                {
                    where: {
                        name
                    },
                    defaults: {
                        lastname,
                        nationality,
                        image,
                        dob,
                        description,
                        teams,
                        id: id
                    }
                })
    
            //Añadimos el nuevo driver al array de drivers y aumentamos el id para un próximo nuevo driver.
            if (created) {
                drivers.push(newDriver);
                id++;
                return res.status(201).json({ arrayDrivers: drivers, message: 'Corredor creado con éxito 🏎🏁'})
            } else {
                return res.status(409).json({ message: 'El corredor proporcionado ya existe' });
            }
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = postDriver;