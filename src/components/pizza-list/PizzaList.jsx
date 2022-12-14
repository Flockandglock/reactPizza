import React from 'react';
import PizzaListItem from '../pizza-list-item/PizzaListItem';

import './_pizzalist.scss';

import pizzes from '../../assets/pizza.json';


const PizzaList = () => {

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
