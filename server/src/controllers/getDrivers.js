const axios = require('axios');
const { Driver } = require('../db');
const URL = 'http://localhost:5000/drivers';

//Parámetro para el paginado:
const ITEMS_PER_PAGE = 20;

const getDrivers= async (req, res) => {
    try {
        
        const page_id = Number(req.query.page) || 1;

        //Determinación de rango de índices para la paginación.
        const startIndex = (page_id - 1 ) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;



    } catch (error) {
        
    }
}

module.exports = getDrivers;