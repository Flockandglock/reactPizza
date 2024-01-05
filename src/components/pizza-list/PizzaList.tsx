import PizzaListItem from '../pizza-list-item/PizzaListItem';
import Paginaton from '../pagination/Paginaton';

import { useSelector, useDispatch } from 'react-redux';

import Skeleton from './Skeleton';

import './_pizzalist.scss';
import React from 'react';

import { PizzaItems } from '../../@types/types';
import { selectPizzaSlice } from '../../redux/slices/pizzaSlice';





const PizzaList: React.FC = () => {

    const {items, status} = useSelector(selectPizzaSlice);


    const renderPizzaList = (pizzes: PizzaItems[]) => {
        return pizzes.map((pizza) => 
             <PizzaListItem key={pizza.id} {...pizza}/>
        )
    };

    const renderSkeleton = (items: PizzaItems[]) => {
        return items.map((item, index: number) => 
             <Skeleton key={index} props={item}/>
        )
    };

    const skeleton = renderSkeleton(items);
    const pizzaList = status === 'loading' ? skeleton : renderPizzaList(items);


    return (
        <div className='wrapper-list'>
            <div className='container'>
                <h2>Все пиццы</h2>

                <div className='pizza-list'>
                    { status === 'error'
                        ?
                        <div>
                            <h4>Произошла ошибка</h4>
                            <p>Неудалось загрузить пиццы</p>
                        </div>
                        :
                        pizzaList
                    }
                </div>
                <Paginaton />
            </div>
            
        </div>
    );
};

export default PizzaList;
