const { Router } = require("express");
const router = Router();
const { getDriversHandler, getDetailsHandler, deleteDriverHandler } = require('../handlers/driversHandlers');
const getTeamsHandler = require('../handlers/teamsHandler');
const postDriverHandler = require('../handlers/postHandler');

router.get('/drivers', getDriversHandler);
router.get('/drivers/:id', getDetailsHandler);
router.get('/teams', getTeamsHandler);
router.post('/drivers', postDriverHandler);
router.delete('/drivers', deleteDriverHandler);

module.exports = router;
