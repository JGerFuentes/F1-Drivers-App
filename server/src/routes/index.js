const { Router } = require("express");

const router = Router();

//Requerimiento de los controllers:
    //EJ: const getCharById = require('../controllers/getCharById');

//Definición de métodos con sus rutas y controladores asociados:
    //EJ: router.get('/character/:id', getCharById);
    
    //O:
    // router.get('/character/:id', (req, res) => {
    //     getCharById(req, res);
    // });


module.exports = router;
