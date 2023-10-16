import PizzaListItem from '../pizza-list-item/PizzaListItem';
import Paginaton from '../pagination/Paginaton';

import Skeleton from './Skeleton';

import './_pizzalist.scss';



const PizzaList = ({pizzes, loading, onChangePage}) => {

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
                <Paginaton onChangePage={num => onChangePage(num)} />
            </div>
            
        </div>
    );
};

export default PizzaList;
