import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar';
import styles from './Navbar.module.scss';
import f1_logo from '../../assets/f1_logo.svg';


const Navbar = ({onSearch}) => {
    return (
        <nav className={styles.navbar_container}>
            <div className={styles.logo}>
                <Link to='/home'>
                    <img src={f1_logo} title='Home' alt="f1_logo"/>
                </Link>
            </div>

            <div className={styles.secondSection}>
                <Link to='/home'>
                    <button id={styles.button1}>HOME</button>
                </Link>

                <Link to='/form'>
                    <button id={styles.button2}>CREATE YOUR DRIVER</button>
                </Link>

                <Link to='/about'>
                    <button id={styles.button3}>ABOUT</button>
                </Link>

                <Searchbar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Navbar;