const { Router } = require("express");
const router = Router();

//Requerimiento de los controllers:
const getDrivers = require('../controllers/getDrivers');
const getTeams = require('../controllers/getTeams');
const getDriversByName = require('../controllers/getDriversByName');
const postDriver = require('../controllers/postDriver');
const getDetails = require('../controllers/getDetails');

//Definición de métodos con sus rutas y controladores asociados:
router.get('/drivers', async (req, res) => {
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
});

router.get('/drivers/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const idToNumber = Number(id);
        const uuidv4_Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (idToNumber > 0 && idToNumber < 509 || uuidv4_Regex.test(id)) {
            const driverDetail = await getDetails(id);
            return res.status(200).json(driverDetail);
        } else {
            return res.status(400).json( { message: 'Invalid ID. Please, try another one.'})
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

router.get('/drivers/teams', async (req, res) => {
    try {
        const allTeams = await getTeams();
        return res.status(200).json(allTeams);
    } catch (error) {
        return res.status(502).json({ error: error.message });
    }
});

router.post('/drivers', async (req, res) => {
    try {
        const newDriver = await postDriver(req, res)
        return res.status(200).json(newDriver)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});


// router.delete('drivers/', deleteDriver);

module.exports = router;
