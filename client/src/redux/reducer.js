import { GET_DRIVERS, GET_TEAMS, ADD_DRIVER, ORDER_DRIVERS, FILTER_DRIVERS } from "./action-types";

const initialState = {
    arrayDrivers: [], //Array de objetos.
    arrayTeams: [], //Array de strings.
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
            state.arrayDrivers.sort( (a, b) => {
                if (payload === 'L-ASC') {
                    return a.lastname.localeCompare(b.lastname);
                }
                if (payload === 'L-DESC') {
                    return b.lastname.localeCompare(a.lastname);
                }
                if (payload === 'N-ASC') {
                    return a.dob.slice(0, 4) - b.dob.slice(0, 4)
                }
                if (payload === 'N-DESC') {
                    return b.dob.slice(0, 4) - a.dob.slice(0, 4)
                }
            });

            return {
                ...state,
                arrayDrivers: state.arrayDrivers
            }
                    

        case FILTER_DRIVERS:
            if (payload === 'allDrivers') {
                return {
                    ...state,
                    arrayDrivers: state.arrayDrivers
                }
            }
            else {
                let filteredDrivers = state.arrayDrivers.filter( (driver) => {
                    return payload === 'DB' ? driver.origin === 'db' :
                        payload === 'API' ? driver.origin === 'api' :
                        driver.teams.includes(payload) ;
                })
                
                return {
                    ...state,
                    arrayDrivers: filteredDrivers
                };
            }
            
        
        default:
            return {...state};
    }
};

export default reducer;

// import { GET_DRIVERS, GET_TEAMS, ADD_DRIVER, ORDER_DRIVERS, FILTER_DRIVERS } from "./action-types";

// const initialState = {
//     arrayDrivers: [], //Array de objetos.
//     arrayTeams: [], //Array de strings.
// };

// const reducer = (state=initialState, { type, payload }) => {
//     switch (type) {
//         case GET_DRIVERS:
//             return {
//                 ...state,
//                 arrayDrivers: payload
//             };
        
//         case GET_TEAMS:
//             return {
//                 ...state,
//                 arrayTeams: payload
//             };

//         case ADD_DRIVER:
//             return {
//                 ...state,
//                 arrayDrivers:[...state.arrayDrivers, payload]

//             };

//         case ORDER_DRIVERS:
//             state.arrayDrivers.sort( (a, b) => {
//                 if (payload === 'L-ASC') {
//                     return a.lastname.localeCompare(b.lastname);
//                 }
//                 if (payload === 'L-DESC') {
//                     return b.lastname.localeCompare(a.lastname);
//                 }
//                 if (payload === 'N-ASC') {
//                     return a.dob.slice(0, 4) - b.dob.slice(0, 4)
//                 }
//                 if (payload === 'N-DESC') {
//                     return b.dob.slice(0, 4) - a.dob.slice(0, 4)
//                 }
//             });

//             return {
//                 ...state,
//                 arrayDrivers: state.arrayDrivers
//             }
                    

//         case FILTER_DRIVERS:
//             if (payload === 'allDrivers') {
//                 return {
//                     ...state,
//                     arrayDrivers: state.arrayDrivers
//                 }
//             }
//             else {
//                 let filteredDrivers = state.arrayDrivers.filter( (driver) => {
//                     return payload === 'DB' ? driver.origin === 'db' :
//                            payload === 'API' ? driver.origin === 'api' :
//                            driver.teams.includes(payload) ;
//                 })
                
//                 return {
//                     ...state,
//                     arrayDrivers: filteredDrivers
//                 };
//             }

//Otra forma:
//             let safeCopy = [... state.arrayDrivers]

//             console.log("Valor de payload en reducer", payload);
//             if (payload === 'allDrivers') {
//                 return {
//                     ...state,
//                     arrayDrivers: safeCopy
//                 }
//             }

//             let filteredDrivers = safeCopy.filter((driver) => {
//                 if (payload === 'DB') return driver.origin === 'db';
//                 if (payload === 'API') return driver.origin === 'api'
//                 return driver.teams.includes(payload)
//             });
//             console.log("El array filteredDrivers", filteredDrivers);

//             return {
//                 ...state,
//                 arrayDrivers: filteredDrivers
//             };

        
//         default:
//             return {...state};
//     }
// };

// export default reducer;