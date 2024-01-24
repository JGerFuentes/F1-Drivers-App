import { GET_DRIVERS, GET_TEAMS, ADD_DRIVER, ORDER_DRIVERS, FILTER_DRIVERS } from "./action-types";

const initialState = {
    arrayDrivers: [],
    arrayTeams: [],
    filteredAndOrderedDrivers:[],
};

const reducer = (state=initialState, { type, payload }) => {
    switch (type) {
        case GET_DRIVERS:
            return {
                ...state,
                arrayDrivers: payload
            };
        
        case GET_TEAMS:
            let orderTeams = payload.sort( (a,b) => {
                return a.localeCompare(b)
            })

            return {
                ...state,
                arrayTeams: orderTeams
            };

        case ADD_DRIVER:
            return {
                ...state,
                arrayDrivers:[...state.arrayDrivers, payload]

            };

        case ORDER_DRIVERS:
            let safeCopy = [...state.arrayDrivers];

            if (!state.filteredAndOrderedDrivers.length > 0) {
                if (payload === 'no-order') {
                    return {
                        ...state,
                        filteredAndOrderedDrivers: safeCopy
                    }
                };
            
                let orderedDrivers = safeCopy.sort( (a, b) => {
                    if (payload === 'L-ASC') {
                        return a.lastname.localeCompare(b.lastname);
                    }
                    else if (payload === 'L-DESC') {
                        return b.lastname.localeCompare(a.lastname);
                    }
                    else if (payload === 'N-ASC') {
                        const [Ayear, Amonth, Aday] = a.dob.split('-').map(Number);
                        const [Byear, Bmonth, Bday] = b.dob.split('-').map(Number);
                    
                        if (Ayear !== Byear) {
                            return Ayear - Byear
                        } else if (Amonth !== Bmonth) {
                            return Amonth - Bmonth
                        } else if (Aday !== Bday) {
                            return Aday - Bday
                        }   
                    }
                    else if (payload === 'N-DESC') {
                        const [Ayear, Amonth, Aday] = a.dob.split('-').map(Number);
                        const [Byear, Bmonth, Bday] = b.dob.split('-').map(Number);
                    
                        if (Ayear !== Byear) {
                            return Byear - Ayear
                        } else if (Amonth !== Bmonth) {
                            return Bmonth - Amonth
                        } else if (Aday !== Bday) {
                            return Bday - Aday
                        }
                    }
                });

                return {
                    ...state,
                    filteredAndOrderedDrivers: orderedDrivers
                }
                
            } 
            else {
                let orderedDrivers = state.filteredAndOrderedDrivers.sort( (a, b) => {
                    if (payload === 'L-ASC') {
                        return a.lastname.localeCompare(b.lastname);
                    }
                    else if (payload === 'L-DESC') {
                        return b.lastname.localeCompare(a.lastname);
                    }
                    else if (payload === 'N-ASC') {
                        const [Ayear, Amonth, Aday] = a.dob.split('-').map(Number);
                        const [Byear, Bmonth, Bday] = b.dob.split('-').map(Number);
                    
                        if (Ayear !== Byear) {
                            return Ayear - Byear
                        } else if (Amonth !== Bmonth) {
                            return Amonth - Bmonth
                        } else if (Aday !== Bday) {
                            return Aday - Bday
                        }   
                    }
                    else if (payload === 'N-DESC') {
                        const [Ayear, Amonth, Aday] = a.dob.split('-').map(Number);
                        const [Byear, Bmonth, Bday] = b.dob.split('-').map(Number);
                    
                        if (Ayear !== Byear) {
                            return Byear - Ayear
                        } else if (Amonth !== Bmonth) {
                            return Bmonth - Amonth
                        } else if (Aday !== Bday) {
                            return Bday - Aday
                        }
                    }
                });

                return {
                  ...state,
                  filteredAndOrderedDrivers: orderedDrivers
                }
              };
            


        case FILTER_DRIVERS:
            let copy = [...state.arrayDrivers];

            if (payload === 'allDrivers') {
                return {
                ...state,
                filteredAndOrderedDrivers: copy
                };
            }

            return {
                ...state,
                filteredAndOrderedDrivers: copy.filter((driver) => {
                    return  payload === 'DB' ? driver.origin === 'db' :
                            payload === 'API' ? driver.origin === 'api' :
                            driver.teams.includes(payload)
                }),
            };
        
        default:
            return {...state};
    }
};

export default reducer;

