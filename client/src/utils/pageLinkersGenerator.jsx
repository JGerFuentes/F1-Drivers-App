//Esta función fue definida para calcular un rango de páginas, asegurando que no se exceda el número total de páginas.
//La idea es que me permita brindar al usuario la posibilidad de clickear sobre un índice (número de página) de su interés para ver los 9 drivers disponibles en dicha página.
const pageLinkersGenerator = (currentPage, totalPages, goToPage) => {
    //Defino el array que contendrá los índices (envueltos en etiquetas <span>) con sus respectivos links.
    const pages = [];

    //Acoto la presentación a un máximo de 10 índices entre los botones 'Previous' y 'Next'.
    const maxIndexes = 10
  
    //Fijo el valor del índice '1' pare retornar fácilmente a la primera pagina.
    pages.push(
      <span key={1} onClick={() => goToPage(1)} style={{ cursor: 'pointer', margin: '0 5px' }}>
        1
      </span>
    )

    //Calculo la cantidadd de índices disponibles:
    const indexes = maxIndexes - 1;

    //Defino el valor de inicio del array entre 2 y la currentPage
    let startPage = Math.max(2, currentPage);

    //Calculo el valor final del array como el mínimo valor disponible entre el número total de páginas (totalPages) y la suma de startPage y (maxIndexes - 1). Esto asegura que endPage no exceda el número total de páginas disponibles.
    let endPage = Math.min(totalPages, startPage + (indexes - 1));
  
    //Con ayuda de un bucle renderizo los índices definidos y les asocio la función 'goToPage'. Luego, los presentaré en el componente "HomePage" entre los botones 'Previous' y 'Next'.
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span key={i} onClick={() => goToPage(i)} style={{ cursor: 'pointer', margin: '0 5px' }}>
          {i}
        </span>
      );
    }

    return pages;
  };
  
  export default pageLinkersGenerator;