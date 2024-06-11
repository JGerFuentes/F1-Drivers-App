import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import Drivers from '../Drivers/Drivers';
import pageLinkersGenerator from '../../utils/pageLinkersGenerator';
import { orderDrivers, filterDrivers } from '../../redux/actions';
import styles from './HomePage.module.scss';

const driversToRender = 9;
const searching_pagination = 15;

const HomePage = ({ arrayDrivers, arrayTeams, foundDrivers }) => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const dispatch = useDispatch();
  const filteredAndOrderedDrivers = useSelector((state) => state.filteredAndOrderedDrivers);

  const [searching, setSearching] = useState(false);
  const [searchedDrivers, setSearchedDrivers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [aux, setAux] = useState(false);
  const [filter, setFilter] = useState('');
  const [order, setOrder] = useState('');
  
  const startIndex = (currentPage - 1 ) * driversToRender;
  const endIndex = startIndex + driversToRender;
  let totalPages = Math.ceil(arrayDrivers.length / driversToRender);
  let driversToShow = []
  

  //Rendering control in case of active searching mode.
  useEffect(()=>{
    if (pathname.search) {
      setSearching(true);
      setSearchedDrivers(foundDrivers);
    } else if (!pathname.search) {
      setSearching(false);
      setSearchedDrivers(arrayDrivers);
    }
  }, [arrayDrivers, foundDrivers, pathname.search]);

  useEffect(() => {
    dispatch(filterDrivers(filter));
    dispatch(orderDrivers(order));
  }, [filter, order])

  //Pagination block.
  if (searching === true) {
    driversToShow = searchedDrivers.slice(0, searching_pagination);
  } else if (aux === true){
    totalPages = Math.ceil(filteredAndOrderedDrivers.length / driversToRender);
    driversToShow = filteredAndOrderedDrivers.slice(startIndex, endIndex);
  } else {
    driversToShow = searchedDrivers.slice(startIndex, endIndex);
  }

  const pageHandler = (page) => {
    setCurrentPage(page);
  };

  const previousPageHandler = () => {
    if (currentPage > 1) {
      pageHandler(currentPage - 1)
    }
  };

  const nextPageHandler = () => {
    pageHandler(currentPage + 1)
  };

  const goToPage = (page) => {
    pageHandler(page);
  };

  const linksGenerator = pageLinkersGenerator(currentPage, totalPages, goToPage);
  
  const handleFilter = (event) => {
    setFilter(event.target.value);
    setAux(true);
    setCurrentPage(1);
  };
  
  const handleOrder = (event) => {
    setOrder(event.target.value);
    setAux(true);
    setCurrentPage(1);
  };

  const returnToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.home_container}>

      {!searching && 
        <div className={styles.filters_and_sort}>
          <div className={styles.f_s_wrapper}>
            <h4>FILTER DRIVERS:</h4>

            <label key='teamFilter'> Team
                <select onChange={handleFilter} value={filter}>
                    <option key='allTeams' value='allTeams'>All teams</option>
                    {arrayTeams && arrayTeams.map((team) => {
                        return(
                            <option key={team} value={team}>
                                {team}
                            </option>
                        )
                    })}
                </select>
            </label>

            <label key='sourceFilter'> Source
                <select onChange={handleFilter} value={filter}>
                    <option key='allDrivers' value='allDrivers'>All Drivers</option>
                    <option key='DB' value='DB'>Database</option>
                    <option key='API' value='API'>API</option>
                </select>
            </label>
          </div>

          <div className={styles.f_s_wrapper}>
            <h4>SORT DRIVERS:</h4>

            <label key='lastnameOrder'> Lastname
                <select onChange={handleOrder} value={order}>
                    <option value='no-order' defaultValue={true}>No order</option>
                    <option value='L-ASC'>Ascendent order</option>
                    <option value='L-DESC'>Descendent order</option>
                </select>
            </label>

            <label key='dobOrder'> Birthdate
                <select onChange={handleOrder} value={order}>
                    <option value='no-order' defaultValue={true}>No order</option>
                    <option value='N-ASC'>Ascendent order</option>
                    <option value='N-DESC'>Descendent order</option>
                </select>
            </label>

          </div>
        </div>
      }

      {!searching && 
        <div>
          <h1>Thy Driver's List</h1>

          <div className={styles.pagination_container}>
            <button onClick={previousPageHandler} disabled={currentPage === 1}>Previous</button>

            <span>{linksGenerator}</span>

            <button onClick={nextPageHandler} disabled={currentPage >= totalPages}>Next</button>
          </div>

        </div>
      }

      <div className={styles.nav_buttons}>
        {searching && 
          <button onClick={() => {setSearching(false); navigate('/home')}}>Back to the list</button>
        }
      </div>

      <Drivers arrayDrivers={driversToShow}/>
      
      {!searching && 
        <div className={styles.pagination_container}>
            <button onClick={previousPageHandler} disabled={currentPage === 1}>Previous</button>

            <span>{linksGenerator}</span>

            <button onClick={nextPageHandler} disabled={currentPage >= totalPages}>Next</button>
        </div>
      }

      <div className={styles.nav_buttons}>
        <button className={styles.scroll_button} onClick={returnToTop}>Return to top</button>
      </div>
      
    </div>
  )
}

export default HomePage;