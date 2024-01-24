const getDrivers = require('../controllers/getDrivers');
const getDriversByName = require('../controllers/getDriversByName');
const getDetails = require('../controllers/getDetails');

const getDriversHandler = async (req, res) => {
    try {
        const { name } = req.query;

        if(!name) {
            const allDrivers = await getDrivers();
            return res.status(200).json(allDrivers);
        } else {
            const matchingDrivers = await getDriversByName(name);
            return res.status(200).json(matchingDrivers);
        }
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
};

const getDetailsHandler =  async (req, res) => {
    try {
        const { id } = req.params;
        const idToNumber = Number(id);
        const uuidv4_Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (idToNumber > 0 && idToNumber < 509 || uuidv4_Regex.test(id)) {
            const driverDetail = await getDetails(id);
            return res.status(200).json(driverDetail);
        } else {
            return res.status(400).json( { message: 'Invalid ID. Please, try another one.' })
        }
    } catch (error) {
        if (error.message === 'Detail not found.') {
            return res.status(404).json({ message: 'Detail not found.' });
          }
        return res.status(500).json({ message: 'Internal server error.' });
    }
}

module.exports = {
    getDriversHandler,
    getDetailsHandler
};