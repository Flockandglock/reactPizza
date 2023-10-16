import React, { useEffect, useState } from 'react';

import Categories from '../components/categories/Categories';
import PizzaList from '../components/pizza-list/PizzaList';
import Paginaton from '../components/pagination/Paginaton';


const Home = ({search}) => {

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({name: 'популярности', sort: 'rating'});

    const [pizzes, setPizzes] = useState([]);

    const [currentPgae, setCurrentPage] = useState(1);

    const [loading, setLoading] = useState(true);

    


    useEffect(() => {
        setLoading(true);

        const order = sortType.sort.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sort.replace('-', '');
        const category = categoryId  > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';


        fetch(`https://6420812425cb6572104ac358.mockapi.io/items?page=${currentPgae}&limit=4&${category}&sortBy=${sortBy}&order=${order}${searchValue}`)
            .then(res => res.json())
            .then(res => {
                setPizzes(res);
                setLoading(false);
            })
            .catch(error => console.log(error));

            window.scrollTo(0, 0)
    }, [categoryId, sortType, search, currentPgae]);


    return (
        <>
            <Categories 
                categoryId={categoryId} 
                onClickCategory={(id) => setCategoryId(id)}
                sortType={sortType}
                onClickSort={(i) => setSortType(i)}
                 />
            <PizzaList 
                pizzes={pizzes}
                loading={loading}
                search={search}
                onChangePage = {num => setCurrentPage(num)} /> 
                
        </>
    );
};

export default Home;