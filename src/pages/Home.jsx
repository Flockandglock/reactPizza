import { useEffect, useState, useContext } from 'react';

import axios from 'axios';

import { useSelector } from 'react-redux';

import Categories from '../components/categories/Categories';
import PizzaList from '../components/pizza-list/PizzaList';

import {SearchContext} from '../App';


const Home = () => {
    
    const {categoryId, sort, currentPage} = useSelector(state => state.filterSlice);

    const [pizzes, setPizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    const {search, setSearch} = useContext(SearchContext);

    
    useEffect(() => {
        setLoading(true);

        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId  > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';

        axios.get(`https://6420812425cb6572104ac358.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValue}`)
        .then(response => {
            setPizzes(response.data);
            setLoading(false);
        })
        .catch(error => console.log(error.statusText));

        window.scrollTo(0, 0);

    }, [categoryId, sort, search, currentPage]);



    return (
        <>
            <Categories />
            <PizzaList 
                pizzes={pizzes}
                loading={loading}
                search={search} /> 
                
        </>
    );
};

export default Home;