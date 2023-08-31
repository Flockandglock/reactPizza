import React, { useEffect, useState } from 'react';
import PizzaListItem from '../pizza-list-item/PizzaListItem';

import Skeleton from './Skeleton';

import './_pizzalist.scss';



const PizzaList = () => {

    const [pizzes, setPizzes] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://6420812425cb6572104ac358.mockapi.io/items")
            .then(res => res.json())
            .then(res => {
                setPizzes(res);
                setLoading(false);
            })
            .catch(error => console.log(error));

            window.scrollTo(0, 0)
    }, []);
    

    const renderPizzaList = (pizzes) => {
        return pizzes.map((pizza) => 
             <PizzaListItem key={pizza.id} props={pizza}/>
        )
    };

    const renderSkeleton = () => {
        return [...new Array(9)].map((items, index) => 
             <Skeleton key={index} props={items}/>
        )
    };

    const pizzaList = renderPizzaList(pizzes);
    const skeleton = renderSkeleton(pizzes);


    return (
        <div className='wrapper-list'>
            <div className='container'>
                <h2>Все пиццы</h2>

                <div className='pizza-list'>
                    {
                        loading
                        ?
                        skeleton
                        :
                        pizzaList
                    }
                </div>
            </div>
        </div>
    );
};

export default PizzaList;
