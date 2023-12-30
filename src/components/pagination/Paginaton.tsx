import { useDispatch, useSelector } from 'react-redux';
import {setCurrentPage} from '../../redux/slices/filterSlice';

import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';
import React from 'react';


const Paginaton: React.FC = () => {

    const dispatch = useDispatch();

    const {currentPage} = useSelector(state => state.filterSlice);
  
   
    return (
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => dispatch(setCurrentPage(event.selected + 1))}
        pageRangeDisplayed={5}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    );
};

export default Paginaton;