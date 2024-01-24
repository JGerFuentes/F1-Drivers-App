const pageLinkersGenerator = (currentPage, totalPages, goToPage) => {
    const pages = [];
    const maxIndexes = 10
  
    pages.push(
      <span key={1} onClick={() => goToPage(1)}>
        1
      </span>
    )

    const indexes = maxIndexes - 1;
    let startPage = Math.max(2, currentPage);
    let endPage = Math.min(totalPages, startPage + (indexes - 1));
  
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <span key={i} onClick={() => goToPage(i)}>
          {i}
        </span>
      );
    }

    return pages;
  };
  
  export default pageLinkersGenerator;