const postDriver = require('../controllers/postDriver');

const postDriverHandler = async (req, res) => {
    try {
        const newDriver = await postDriver(req, res)
        return res.status(200).json(newDriver)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

module.exports = postDriverHandler;