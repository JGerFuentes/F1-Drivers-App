import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import { orderDrivers, filterDrivers } from '../../redux/actions';

const Navbar = ({onSearch, arrayTeams}) => {
    const dispatch = useDispatch();
    
    const [aux, setAux] = useState(false);

    const handleFilter = (event) => {
        dispatch(filterDrivers(event.target.value));
        setAux(!aux)
        console.log(event.target.value);
    };

    const handleOrder = (event) => {
        dispatch(orderDrivers(event.target.value))
    };

    return (
        <div>
            <Link to='/home'>
                <button>HOME</button>
            </Link>

            <Link to='/form'>
                <button>CREATE YOUR DRIVER</button>
            </Link>

            <Link to='/about'>
                <button>ABOUT</button>
            </Link>

            <Searchbar onSearch={onSearch}/>
            
            <div>
                <div>
                    FILTER:
                    <label key='teamFilter'>
                        By Team
                        <select onChange={handleFilter}>
                            <option key='allDrivers' value='allDrivers'>All drivers</option>
                            {arrayTeams && arrayTeams.map((team) => {
                                return(
                                    <option key={team} value={team}>
                                        {team}
                                    </option>
                                )
                            })}
                        </select>
                    </label>
                    <label key='sourceFilter'>
                        By Source
                        <select onChange={handleFilter}>
                            <option key='allDrivers2' value='allDrivers'>All Drivers</option>
                            <option key='DB' value='DB'>Database</option>
                            <option key='API' value='API'>API</option>
                        </select>
                    </label>
                </div>

                <div>
                    ORDER:
                    <label key='lastnameOrder'>
                        By Lastname
                        <select onChange={handleOrder}>
                            <option value='L-ASC'>Ascendent</option>
                            <option value='L-DESC'>Descendent</option>
                        </select>
                    </label>
                    <label key='dobOrder'>
                        By Birthdate
                        <select onChange={handleOrder}>
                            <option value='N-ASC'>Ascendent</option>
                            <option value='N-DESC'>Descendent</option>
                        </select>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Navbar;