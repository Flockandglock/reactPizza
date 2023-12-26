import PizzaListItem from '../pizza-list-item/PizzaListItem';
import Paginaton from '../pagination/Paginaton';

import { useSelector, useDispatch } from 'react-redux';

import Skeleton from './Skeleton';

import './_pizzalist.scss';



const PizzaList = () => {

    const {items, status} = useSelector(state => state.pizzaSlice);


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
