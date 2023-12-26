import PizzaListItem from '../pizza-list-item/PizzaListItem';
import Paginaton from '../pagination/Paginaton';

import { useSelector, useDispatch } from 'react-redux';

import Skeleton from './Skeleton';

import './_pizzalist.scss';



const PizzaList = ({loading}) => {

    const {items} = useSelector(state => state.pizzaSlice);


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

    const pizzaList = renderPizzaList(items);
    const skeleton = renderSkeleton(items);


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
                <Paginaton />
            </div>
            
        </div>
    );
};

export default PizzaList;
