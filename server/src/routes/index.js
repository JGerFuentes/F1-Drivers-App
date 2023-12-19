const { Router } = require("express");
const router = Router();

//Requerimiento de los controllers:
const getDrivers = require('../controllers/getDrivers');
const getDetails = require('../controllers/getDetails');
const getDriverByName = require('../controllers/getDriverByName');
const getTeams = require('../controllers/getTeams');
const postDriver = require('../controllers/postDriver');

//Definición de métodos con sus rutas y controladores asociados:
router.get('/drivers', getDrivers);
router.get('/drivers', getDriverByName);
router.post('/drivers', postDriver);
router.get('/drivers/:id', getDetails);
router.get('/drivers/teams', getTeams);
// router.delete('drivers/', deleteDriver);

    //O:
    // router.get('/character/:id', (req, res) => {
    //     getCharById(req, res);
    // });


module.exports = router;
