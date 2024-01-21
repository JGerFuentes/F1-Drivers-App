const getApiData = require('./getApiData');
const { Team } = require ('../db');

const regex = /\b((?<!\by\s)\b[A-Za-zÀ-ÖØ-öø-ÿ\s.-]+)\b/g;
const filterRegex = /\b\p{L}+\s+y\s+\p{L}+\b/gu;

const getApiTeams = async () => {
    try {
        let allApiTeams = new Set();
        const data = await getApiData(); 
        
        data.forEach(driver => {
            if (driver.teams) { 
                let driverTeams = driver.teams.match(regex);
                driverTeams.forEach(team => allApiTeams.add(team));
            }
        });

        const allTeams = [...allApiTeams]; 
  
        allFilteredTeams = allTeams.filter(team => !team.match(filterRegex)); 
        
        try {
            const elementsToObjects = allFilteredTeams.map(team => ({ team_name: team }));
            await Team.bulkCreate(elementsToObjects);
        } catch (error) {
            console.error('Error al crear los equipos en la DB', error.message);
        }
    } catch (error) {
        console.error('Solicitud de equipos imposible de cursar', error.message);
    }
}

module.exports = getApiTeams;