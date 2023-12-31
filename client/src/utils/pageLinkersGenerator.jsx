//Esta función fue definida para calcular un rango de páginas centrado alrededor de la página actual, asegurándose de que no se exceda el número total de páginas y ajustando dicho rango si es necesario.
//La idea es que me permita brindar al usuario la posibilidad de clickear sobre un índice (número de página) de su interés para ver los 9 drivers disponibles en dicha página.
const pageLinkersGenerator = (currentPage, totalPages, goToPage) => {
    //Defino el array que contendrá los índices (envueltos en etiquetas <span>) con sus respectivos links.
    const pages = [];

    //Acoto la presentación a un máximo de seis índices entre los botones 'Previous' y 'Next'.
    const maxIndexes = 6;
  
    //Calculo el valor de inicio del array entre 1 y el valor de la resta entre la currentPage y la mitad del número máximo de páginas a mostrar (maxIndexes). Este cálculo intenta centrar la currentPage en el rango visible de páginas.
    // let startPage = Math.max(1, currentPage - Math.floor(maxIndexes / 2));
    let startPage = currentPage;

    //Calculo el valor final del array como el mínimo valor dsiponible entre el número total de páginas (totalPages) y la suma de startPage y (maxIndexes - 1). Esto asegura que endPage no exceda el número total de páginas disponibles.
    let endPage = Math.min(totalPages, startPage + (maxIndexes - 1));
  
    //Calculo la diferencia entre la cantidad máxima de índices a mostrar y la cantidad de páginas actualmente en el rango.
    const diff = maxIndexes - (endPage - startPage + 1);

    // Ajusto startPage restando la diferencia calculada.Y nos aseguramos de que su valor se encuentre entre 1 y el resultado de la diferencia, para evitar números negativos.
    startPage = Math.max(1, startPage - diff);
  
    //Con ayuda de un bucle renderizo los índices definidos y les asocio la función 'goToPage'. Luego, los presento entre los botones 'Previous' y 'Next'.
    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <span key={i} onClick={() => goToPage(i)} style={{ cursor: 'pointer', margin: '0 5px' }}>
          {i}
        </span>
      );
    }

    return pages;
  };
  
  export default pageLinkersGenerator;