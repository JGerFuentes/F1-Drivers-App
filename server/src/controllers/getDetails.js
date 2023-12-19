const getApiData = require('../utils/getApiData');

const getDetails = async (req, res) => {
    const id = Number(req.params.id);

    const data = await getApiData();
    const { name, image, dob, nationality, description, teams } = data;

    
}

module.exports = getDetails;