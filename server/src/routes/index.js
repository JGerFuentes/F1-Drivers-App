const { Router } = require("express");
const router = Router();

//Requerimiento de los controllers:
const getDrivers = require('../controllers/getDrivers');
const getDetails = require('../controllers/getDetails');
const getDriverByName = require('../controllers/getDriverByName');
// const getTeams = require('../controllers/getTeams');
const postDriver = require('../controllers/postDriver');

//Definición de métodos con sus rutas y controladores asociados:
    //No hace falta agregar '/drivers' porque ya fue establecida/asociada como ruta raíz en la definición del enrutamiento en el archivo server.js
router.get('/drivers', getDrivers);
router.get('/drivers/:id', getDetails);
router.get('/drivers/name', getDriverByName);
// router.get('/drivers/teams', getTeams);
router.post('/drivers', postDriver);

    //O:
    // router.get('/character/:id', (req, res) => {
    //     getCharById(req, res);
    // });


module.exports = router;
