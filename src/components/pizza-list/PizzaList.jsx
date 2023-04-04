import React, { useEffect, useState } from 'react';
import PizzaListItem from '../pizza-list-item/PizzaListItem';

import './_pizzalist.scss';



const PizzaList = () => {

    const [pizzes, setPizzes] = useState([]);


    useEffect(() => {
        fetch("https://6420812425cb6572104ac358.mockapi.io/items")
            .then(res => res.json())
            .then(res => {
                setPizzes(res);
            })
    }, []);

    const renderPizzaList = (pizzes) => {
        return pizzes.map((pizza) => 
             <PizzaListItem key={pizza.id} props={pizza}/>
        )
    };

    const pizzaList = renderPizzaList(pizzes);


    return (
        <div className='wrapper-list'>
            <div className='container'>
                <h2>Все пиццы</h2>

                <div className='pizza-list'>
                    {pizzaList}
                </div>
            </div>
        </div>
    );
};

export default PizzaList;
