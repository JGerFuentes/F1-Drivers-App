import React, { useState } from 'react';
import Drivers from '../Drivers/Drivers';
import pageLinkersGenerator from '../../utils/pageLinkersGenerator';

const driversToRender = 9; //Cantidad de drivers a renderizar según el paginado indicado para el componente 'HomePage'.
const searching_pagination = 15; //Cantidad de drivers a renderizar para el caso de búsquedas realizadas por el usuario.

const HomePage = ({ arrayDrivers }) => {
  //Seteo del estado de búsqueda.
  const [searching, setSearching] = useState(false);

  // Generación de variables necesarias para el paginado
  const [currentPage, setcurrentPage] = useState(1); //Seteo de estado de la página renderizada.
  
  //Índice de inicio de páginado.
  const startIndex = (currentPage - 1 ) * driversToRender;
  
  //Índice de finalización de páginado.
  const endIndex = startIndex + driversToRender;
  
  //Calculo las páginas totales diponibles en función del número total de drivers.
  const totalPages = Math.ceil(arrayDrivers.length / driversToRender);
  
  //Realizo la segmentación de los elementos a presentar en función de los índices definidos.
  const driversToShow = arrayDrivers.slice(startIndex, endIndex); 

  //Handler para el seteo de la página en visualización.
  const pageHandler = (page) => {
    setcurrentPage(page)
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

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  return (
    <div>
      <h2>Thy Driver's List</h2>
      {!searching && 
        <div>
          Me ves si no estamos en modo búsqueda
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
          Me ves si no estamos en modo búsqueda
          <div>
            <button onClick={previousPageHandler} disabled={currentPage === 1}>Previous</button>

            <span>{linksGenerator}</span>

            <button onClick={nextPageHandler} disabled={currentPage >= totalPages}>Next</button>
          </div>
        </div>
      }
      <button className="scroll-to-top" onClick={backToTop}>Go back to top</button>
    </div>
    

  )
}

export default HomePage;