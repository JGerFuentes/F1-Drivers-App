const { Driver } = require('../db.js');

const postDriver = async (req, res) => {
    try {

        const arrayDrivers = await Driver.findAll();
        console.log(arrayDrivers);

        //Obtenemos por body los campos completados por el cliente en el Form.
        const { driver_name, lastname, nationality, image, dob, description, teams } = req.body;
            //* 'teams' va a ser un arreglo con elementos elegidos por el cliente en el front.
        
        //Verificación de campos del Form.
        if (!driver_name || !lastname || !nationality || !image || !dob || !description || !teams) {
            console.error('Faltan datos, por favor complete todos los campos.')
            return res.status(400).json({ message: 'Faltan datos, por favor complete todos los campos.' })
        }

        //Definición del ID, para ser congruentes con los disponibles en la API.
        const lastDriver = await Driver.findOne({ order: [['driver_id', 'DESC']]}) //Busco por 'driver_id' el último driver creado.
        const id = lastDriver ? (lastDriver.driver_id + 1) : 509; //Si hay alguno, tomo el último valor existente y le sumo 1, sino le adjudico el 'driver_id' 509.

        //Creación del nuevo driver en la DB.
        const [newDriver, created] = await Driver.findOrCreate(
            {
                where: {
                    driver_name
                },
                defaults: {
                    driver_id: id,
                    lastname,
                    nationality,
                    image,
                    dob,
                    description,
                    teams,
                }
            })
            if (created) {
                console.log('--> TODO EN ORDEN!');
                return res.status(201).json({ newDriver, message: 'Corredor creado con éxito 🏎🏁'})
            } else {
                console.error('Error al crear el corredor');
                return res.status(500).json({ message: 'Error al crear el corredor' })

            }
    }
    catch(error){
        console.error('Error al postear driver')
        throw error
//         return res.status(500).json({ error: error.message })

    }
}
module.exports = postDriver;