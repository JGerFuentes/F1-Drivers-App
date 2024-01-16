import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.css';


const Navbar = ({onSearch}) => {
    return (
        <div className="navbar_container">
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
        </div>
    )
}

export default Navbar;