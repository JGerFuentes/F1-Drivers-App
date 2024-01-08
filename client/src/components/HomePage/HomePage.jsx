import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Drivers from '../Drivers/Drivers';
import pageLinkersGenerator from '../../utils/pageLinkersGenerator';

const driversToRender = 9; //Cantidad de drivers a renderizar según el paginado indicado para el componente 'HomePage'.
const searching_pagination = 15; //Cantidad de drivers a renderizar para el caso de búsquedas realizadas por el usuario.

const HomePage = ({ arrayDrivers, foundDrivers }) => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const [searching, setSearching] = useState(false);
  const [filteredDrivers, setFilteredDrivers] = useState([]);
  const [currentPage, setcurrentPage] = useState(1); 
  
  const startIndex = (currentPage - 1 ) * driversToRender;
  const endIndex = startIndex + driversToRender;
  const totalPages = Math.ceil(arrayDrivers.length / driversToRender);
  let driversToShow = []

  useEffect(()=>{
    if(pathname.search) {
      setSearching(true);
      setFilteredDrivers(foundDrivers);
    } else if (!pathname.search) {
      setSearching(false);
      setFilteredDrivers(arrayDrivers);
    }
  }, [arrayDrivers, foundDrivers]);

  //Bloque para la definición de los elementos a renderizar.
  if (searching === true) {
    driversToShow = filteredDrivers.slice(startIndex, endIndex);
  } else {
    driversToShow = filteredDrivers.slice(0, searching_pagination);
  }

  //Handler para el seteo de la página en visualización.
  const pageHandler = (page) => {
    setcurrentPage(page);
  };

  //Handler para ir a la página anterior (si no estamos en la primera página).
  const previousPageHandler = () => {
    if (currentPage > 1) {
      pageHandler(currentPage - 1)
    }
  };

  //Handler para ir a la página siguiente.
  const nextPageHandler = () => {
    pageHandler(currentPage + 1)
  };

  //Función para ir a una página específica seleccionada por el usuario mediante un 'click event'.
  const goToPage = (page) => {
    pageHandler(page);
  };

  //Invocación de la función 'pageLinkersGenerator' de la carpeta 'utils'.
  const linksGenerator = pageLinkersGenerator(currentPage, totalPages, goToPage);

  //Función para volver al tope de página.
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {!searching && 
        <div>
          <h2>Thy Driver's List</h2>
          <div>
            <button onClick={previousPageHandler} disabled={currentPage === 1}>Previous</button>

            <span>{linksGenerator}</span>

            <button onClick={nextPageHandler} disabled={currentPage >= totalPages}>Next</button>
          </div>
        </div>
      }

      <Drivers arrayDrivers={driversToShow}/>
      
      {!searching && 
        <div>
            <button onClick={previousPageHandler} disabled={currentPage === 1}>Previous</button>

            <span>{linksGenerator}</span>

            <button onClick={nextPageHandler} disabled={currentPage >= totalPages}>Next</button>
        </div>
      }

      {searching && 
        <button onClick={() => {setSearching(false); setFilteredDrivers(arrayDrivers); navigate('/home')}}>Back to the list</button>
      }

      <button className="scroll-to-top" onClick={backToTop}>To the top</button>
    </div>
    

  )
}

export default HomePage;