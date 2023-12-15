const { Team } = require('../db');
const getApiTeams = require('../utils/getApiTeams');

const postTeams = async () =>{
    
    const allTeams = getTeams();

    await allTeams.forEach(team => Team.create({team_name: team}))
}

module.exports = postTeams;