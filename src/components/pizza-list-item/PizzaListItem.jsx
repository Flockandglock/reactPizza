import { useState } from 'react';

import './_pizzalistitem.scss';


const PizzaListItem = ({ props }) => {
    const { id, imageUrl, title, types, sizes, price, category, rating } = props;
    const typeNames = ['тонкое', 'традиционное'];

    const [activeIndexSize, setActiveIndexSize] = useState(0);
    const [activeIndexType, setActiveIndexType] = useState(0);

    const renderTypes = (arr) => {
        return arr.map((item, index) => (
            <li
                key={index}
                className={activeIndexType === index ? 'active' : ''}
                onClick={() => setActiveIndexType(index)}>
                {typeNames[index]}
            </li>
        ));
    };

    const renderSizes = (arr) => {
        return arr.map((item, index) => (
            <li
                key={index}
                className={activeIndexSize === index ? 'active' : ''}
                onClick={() => setActiveIndexSize(index)}>
                {item} см.
            </li>
        ));
    };

    const typesElem = renderTypes(types);
    const sizesElem = renderSizes(sizes);

    return (
        <div className='pizza-item'>
            <img src={imageUrl} alt={imageUrl} />

            <div className='pizza-item__title'>{title}</div>

            <div className='pizza-item__style'>
                <div className='wrapper__options'>
                    <ul className='type'>
                        {typesElem}
                        {/* <li className='active'>тонкое</li>
                        <li>традиционное</li> */}
                    </ul>
                    <ul className='size'>
                        {sizesElem}
                        {/* <li className='active'>26 см.</li>
                        <li>30 см.</li>
                        <li>40 см.</li> */}
                    </ul>
                </div>

                <div className='wrapper__price'>
                    <div className='price__start'>от {price}</div>
                    <button className='price__btn'>
                        <svg
                            width='12'
                            height='12'
                            viewBox='0 0 12 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
                                fill='#EB5A1E'
                            />
                        </svg>

                        <span>Добавить</span>

                        <p className='price__btn-count'>2</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PizzaListItem;
