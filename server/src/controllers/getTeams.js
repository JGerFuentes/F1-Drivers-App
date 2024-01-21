const { Team } = require('../db.js');

const getTeams = async () => {
    try {
        const allTeams = await Team.findAll({
            attributes: ['team_name'],
            raw: true
        }); 
        
        if (allTeams.length > 0) {
            let arrayTeams = [];
            allTeams.map((team) => {
                arrayTeams.push(team.team_name)
            })
            return arrayTeams;
        } else {
            throw new Error ("Error while trying to retrieve the teams' info. Sorry for the inconvenience 😟");
        }
    } catch (error) {
        return ({ error: error.message });
    }
}

module.exports = getTeams;