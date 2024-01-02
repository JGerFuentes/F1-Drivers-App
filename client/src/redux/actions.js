import { GET_DRIVERS, GET_TEAMS, ADD_DRIVER, ORDER_DRIVERS, FILTER_DRIVERS } from "./action-types";
const URL = 'http://localhost:3001';

export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/drivers`);
            const data = await response.json();

            return dispatch({
                type: GET_DRIVERS,
                payload: data //Array de objetos.
            });   
        } catch (error) {
            return ({ error: error.message });
        }
    }
};

export const getAllTeams = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL}/teams`);
            const data = await response.json();

            return dispatch({
                type: GET_TEAMS,
                payload: data //Array de strings.
            });
        } catch (error) {
            return ({ error: error.message })
        }
    };
};

export const addDriver = (driver) => {
    return async (dispatch) =>{
        try {
            const response = await fetch(`${URL}/drivers`, {
                method: 'POST',
                headers: {
                    'Content/type': 'application/json'
                },
                body: JSON.stringify(driver)
            });
            const data = await response.json();

            return dispatch({
                type: ADD_DRIVER,
                payload: data, //Objeto
            })
        } catch (error) {
            return ({ error: error.message })
        }

    }
};

export const orderDrivers = (order) => {
    return { type: ORDER_DRIVERS, payload: order } //Order: Alfabético (lastname) || Numérico (dob)
};

export const filterDrivers = (filter) => {
    return { type: FILTER_DRIVERS, payload: filter } // Filter: Teams || Origin (DB || API)
};