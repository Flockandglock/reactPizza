import { useContext, useRef, useCallback, useState } from 'react';

import {SearchContext} from '../../App';

import styles from './search.module.scss';

import clear from '../../assets/clear.svg'


const Search = () => {

    const {search, setSearch} = useContext(SearchContext);

    const [initValue, setInitValue] = useState('');

    const inputRef = useRef();

    const onClickClear = () => {
        setInitValue('')
        setSearch('');
        inputRef.current.focus();
    };

    const debuonce = (fun, ms) => {
        let timeout;

        return function () {
           const fnCall = () => {fun.apply(this, arguments)};

           clearTimeout(timeout);

           timeout = setTimeout(fnCall, ms);
        }
    };

    const updateSearchValue = useCallback(
        debuonce(str => {
            setSearch(str)
            console.log(str)
        }, 500)
    , []);

    const onCangeInput = (event) => {
        setInitValue(event);
        updateSearchValue(event);
    };
    


    return (
        <div className={styles.root}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 50 50" height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" ><rect fill="none" height="50" width="50"/><circle cx="21" cy="20" fill="none" r="16" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"/><line fill="none" stroke="#000000" strokeMiterlimit="10" strokeWidth="4" x1="32.229" x2="45.5" y1="32.229" y2="45.5"/></svg>

            <input 
                ref={inputRef}
                className={styles.input} 
                placeholder='Поиск пиццы'
                value={initValue}
                onChange={(event) => onCangeInput(event.target.value)} />

            {
                initValue 
                ?
                <img src={clear} alt='close' className={styles.clear} onClick={onClickClear} />
                :
                undefined
            }
        </div>
    );
};

export default Search;