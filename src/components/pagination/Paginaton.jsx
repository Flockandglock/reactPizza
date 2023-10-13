import ReactPaginate from 'react-paginate';


import styles from './pagination.module.scss';


const Paginaton = () => {

   

    return (
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => console.log(event)}
        pageRangeDisplayed={5}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    );
};

export default Paginaton;