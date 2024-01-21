const getTeams = require('../controllers/getTeams');

const getTeamsHandler = async (req, res) => {
    try {
        const allTeams = await getTeams();
        return res.status(200).json(allTeams);
    } catch (error) {
        return res.status(502).json({ error: error.message });
    }
}

module.exports = getTeamsHandler;