import { GET_DRIVERS, GET_TEAMS, ADD_DRIVER, ORDER_DRIVERS, FILTER_DRIVERS } from "./action-types";

const initialState = {
    arrayDrivers: [], //Array de objetos.
    arrayTeams: [], //Array de strings.
    filteredAndOrderedDrivers:[]
};

const reducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case GET_DRIVERS:
            return {
                ...state,
                arrayDrivers: payload
            };
        
        case GET_TEAMS:
            return {
                ...state,
                arrayTeams: payload
            };

        case ADD_DRIVER:
            return {
                ...state,
                arrayDrivers:[...state.arrayDrivers, payload]

            };

        case ORDER_DRIVERS:
            let safeCopy = [...state.arrayDrivers]

            // if (payload === 'no-order') {
            //     console.log('no order: on');
            //     return {
            //         ...state,
            //         filteredAndOrderedDrivers: safeCopy
            //     }
            // } 
            // else {
                if (!state.filteredAndOrderedDrivers.length > 0) {
                    if (payload === 'no-order') {
                        console.log('no order: on');
                        return {
                            ...state,
                            filteredAndOrderedDrivers: safeCopy
                        }
                    } 

                    let orderedDrivers= safeCopy.sort( (a, b) => {
                        if (payload === 'L-ASC') {
                            console.log('lastname ascendente: on')
                            return a.lastname.localeCompare(b.lastname);
                        }
                        if (payload === 'L-DESC') {
                            console.log('lastname descendente: on')
                            return b.lastname.localeCompare(a.lastname);
                        }
                        if (payload === 'N-ASC') {
                            console.log('dob ascendente: on')
                            return a.dob.slice(0, 4) - b.dob.slice(0, 4)
                        }
                        if (payload === 'N-DESC') {
                            console.log('dob descendente: on');
                            return b.dob.slice(0, 4) - a.dob.slice(0, 4)
                        }
                    })

                    return {
                        ...state,
                        filteredAndOrderedDrivers: orderedDrivers
                    }
                    
                } else {
                    if (payload === 'no-order') {
                        console.log('no order: on');
                        return {
                            ...state,
                            filteredAndOrderedDrivers: state.filteredAndOrderedDrivers
                        }
                    } 
                    let orderedDrivers= state.filteredAndOrderedDrivers.sort( (a, b) => {
                        if (payload === 'L-ASC') {
                            console.log('lastname ascendente: on')
                            return a.lastname.localeCompare(b.lastname);
                        }
                        if (payload === 'L-DESC') {
                            console.log('lastname descendente: on')
                            return b.lastname.localeCompare(a.lastname);
                        }
                        if (payload === 'N-ASC') {
                            console.log('dob ascendente: on')
                            return a.dob.slice(0, 4) - b.dob.slice(0, 4)
                        }
                        if (payload === 'N-DESC') {
                            console.log('dob descendente: on');
                            return b.dob.slice(0, 4) - a.dob.slice(0, 4)
                        }
                    })

                    return {
                        ...state,
                        filteredAndOrderedDrivers: orderedDrivers
                    }
                }
            // };


        case FILTER_DRIVERS:
            let copy = [...state.arrayDrivers];

            if (payload === 'allDrivers') {
                return {
                    ...state,
                    filteredAndOrderedDrivers: copy
                }
            }
            // if (!state.filteredAndOrderedDrivers > 0) {
                return {
                    ...state,
                    filteredAndOrderedDrivers: copy.filter( (driver) => {
                        return  payload === 'DB' ? driver.origin === 'db' :
                                payload === 'API' ? driver.origin === 'api' :
                                driver.teams.includes(payload) ;
                        })
                }  
            // }
            // else {
            //     return {
            //         ...state,
            //         filteredAndOrderedDrivers: state.filteredAndOrderedDrivers.filter( (driver) => {
            //             return  payload === 'DB' ? driver.origin === 'db' :
            //                     payload === 'API' ? driver.origin === 'api' :
            //                     driver.teams.includes(payload) ;
            //             })
            //     }  
            // }
            
        
        default:
            return {...state};
    }
};

export default reducer;

