import React from 'react'
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = ({onSearch}) => {
  return (
    <div>
        <Searchbar onSearch={onSearch}/>
        
        <Link to='/home'>
            <button>HOME</button>
            {/* <img></img> */}
        </Link>

        <Link to='/form'>
            <button>Create</button>
        </Link>

        <Link to='/about'>
            <button>About</button>
        </Link>


        
        {/* <Link>
            <button>Order</button>
        </Link>

        <Link>
            <button>Filter</button>
        </Link> */}
    </div>
  )
}

export default Navbar;