const { Router } = require("express");
const router = Router();
const { getDriversHandler, getDetailsHandler } = require('../handlers/driversHandlers');
const getTeamsHandler = require('../handlers/teamsHandler');
const postDriverHandler = require('../handlers/postHandler');

router.get('/drivers', getDriversHandler);
router.get('/drivers/:id', getDetailsHandler);
router.get('/teams', getTeamsHandler);
router.post('/drivers', postDriverHandler);

module.exports = router;
