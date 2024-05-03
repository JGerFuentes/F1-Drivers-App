const { Driver } = require('../models/Driver')

const deleteDriver = async (id) => {
    try {
        const targetDriver = id;
        
        await Driver.destroy({
            where: {
                driver_id: targetDriver
            },
        })

        window.alert ('Driver deleted successfully! Congratulations!')
    } catch (error) {
        throw new Error ('Error while Processing deletion')
    } 
}

module.exports = deleteDriver;