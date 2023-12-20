const { Router } = require("express");
const router = Router();

//Requerimiento de los controllers:
const getDrivers = require('../controllers/getDrivers');
const getTeams = require('../controllers/getTeams');
const getDriverByName = require('../controllers/getDriverByName');
const postDriver = require('../controllers/postDriver');
const getDetails = require('../controllers/getDetails');

//Definición de métodos con sus rutas y controladores asociados:
router.get('/drivers', async (req, res) => {
    try {
        const allDrivers = getDrivers();
        return res.status(200).json(allDrivers);
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
});

router.get('/drivers/teams', async (req, res) => {
    try {
        const allTeams = await getTeams();
        return res.status(200).json(allTeams);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
});

router.get('/drivers', getDriverByName);

router.post('/drivers', async (req, res) => {
    try {
        const newDriver = await postDriver(req, res)
        return res.status(200).json(newDriver)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
});

router.get('/drivers/:id', getDetails);
// router.delete('drivers/', deleteDriver);

module.exports = router;
