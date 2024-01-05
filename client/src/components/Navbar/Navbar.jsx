import React from 'react'
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';

const Navbar = ({onSearch}) => {
  return (
    <div>
        
        <Link to='/home'>
            <button>HOME</button>
            {/* <img></img> */}
        </Link>

        <Link to='/form'>
            <button>CREATE YOUR DRIVER</button>
        </Link>

        <Link to='/about'>
            <button>ABOUT</button>
        </Link>

        <Searchbar onSearch={onSearch}/>

        
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