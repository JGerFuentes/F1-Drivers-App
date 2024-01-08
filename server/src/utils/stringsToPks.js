const { Team } = require('../db');

const stringsToPks = async (teams) => {
    let arrayPkTeams = [];
    try {
        for (let i = 0; i < teams.length; i++) {
            const foundedTeam = await Team.findOne(
                {where: {
                    team_name: teams[i]
                },
                attributes: ['pk']
                }
            )
        
            if (foundedTeam) {
                arrayPkTeams.push(foundedTeam.pk)
            }
        }
    } catch (error) {
        throw new Error ("Error while retrieving teams' pk")
    }

    return arrayPkTeams;
}

module.exports = stringsToPks;