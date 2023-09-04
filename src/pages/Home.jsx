import React, { useEffect, useState } from 'react';

import Categories from '../components/categories/Categories';
import PizzaList from '../components/pizza-list/PizzaList';


const Home = () => {

    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({name: 'популярности', sort: 'rating'});

    const [pizzes, setPizzes] = useState([]);

    const [loading, setLoading] = useState(true);

    console.log(sortType)


    useEffect(() => {
        setLoading(true);

        const order = sortType.sort.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sort.replace('-', '');
        const category = categoryId  > 0 ? `category=${categoryId}` : '';

        fetch(`https://6420812425cb6572104ac358.mockapi.io/items?category=${category}&sortBy=${sortBy}&order=${order}`)
            .then(res => res.json())
            .then(res => {
                setPizzes(res);
                setLoading(false);
            })
            .catch(error => console.log(error));

            window.scrollTo(0, 0)
    }, [categoryId, sortType]);


    return (
        <>
            <Categories 
                categoryId={categoryId} 
                onClickCategory={(id) => setCategoryId(id)}
                sortType={sortType}
                onClickSort={(i) => setSortType(i)} />
            <PizzaList 
                pizzes={pizzes}
                loading={loading} /> 
        </>
    );
};

export default Home;