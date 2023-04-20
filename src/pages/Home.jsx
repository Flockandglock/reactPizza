import React from 'react';

import Categories from '../components/categories/Categories';
import PizzaList from '../components/pizza-list/PizzaList';


const Home = () => {
    return (
        <>
            <Categories/>
            <PizzaList/> 
        </>
    );
};

export default Home;