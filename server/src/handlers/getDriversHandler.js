const getDrivers = require('../controllers/getDrivers');

const getDriversHandler = async(req, res) => {
    try {
        const allDrivers = getDrivers();

        return res.status(200).json(allDrivers)
    } catch (error) {
        return res.status(404).json({ message: 'Error en la petición' })
    }
}

module.exports = getDriversHandler;