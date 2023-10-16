import ReactPaginate from 'react-paginate';


import styles from './pagination.module.scss';


const Paginaton = ({onChangePage}) => {

  
   
    return (
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => onChangePage(event.selected + 1)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    );
};

export default Paginaton;