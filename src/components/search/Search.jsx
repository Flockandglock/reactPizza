import React, { useContext } from 'react';

import {SearchContext} from '../../App';

import styles from './search.module.scss';

import clear from '../../assets/clear.svg'


const Search = () => {

    const {search, setSearch} = useContext(SearchContext);


    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" ><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/><line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></svg>

            <input className={styles.input} 
                placeholder='Поиск пиццы'
                value={search}
                onChange={(event) => setSearch(event.target.value)} />

            {
                search 
                ?
                <img src={clear} alt='close' className={styles.clear} onClick={() => setSearch('')} />
                :
                undefined
            }
        </div>
    );
};

export default Search;