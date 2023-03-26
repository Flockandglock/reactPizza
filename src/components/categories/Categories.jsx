import React from 'react';
import { useState } from 'react';

import './_categories.scss';

const Categories = () => {

    // Данные для категорий и попапа
    const [activeIndex, setActiveIndex] = useState(0);
    const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const [visiblePopup, setVsiblePopup] = useState(false);
    const categoriesPopup = ['популярности', 'цене', 'алфавиту'];
    const [activeCategoriesPopup, setActiveCategoriesPopup] = useState(0);
    const selectedName = categoriesPopup[activeCategoriesPopup];


    //Тоглим активные индексы 
    const toogleActivePopup = (index) => {
        setActiveCategoriesPopup(index);
        setVsiblePopup(false);
    };

    const toggleActive = (index) => {
        setActiveIndex(index);
    };

    // Возрващаем список
    const renderCategories = (arr) => {
        return arr.map((item, index) => 
            <li key={index} onClick={() => toggleActive(index)} className={activeIndex === index ? 'active' : ''}>{item}</li>    
        );
    };

    const renderCategoriesPopup= (arr) => {
        return arr.map((item, index) => 
            <li key={index} onClick={() => toogleActivePopup(index)} className={activeCategoriesPopup === index ? 'active' : ''}>{item}</li>    
        );
    };

    // Вызываем наши списки
    const listCategories = renderCategories(categoriesArr);
    const listCategoriesPopup = renderCategoriesPopup(categoriesPopup);



    return (
        <div className='container'>
            <div className='categories'>
                <ul className='list'>
                    {listCategories}
                </ul>

                <div className='sort'>
                    <div className='sort__select'
                        onClick={() => setVsiblePopup(!visiblePopup)}>
                        <svg
                            width='10'
                            height='6'
                            viewBox='0 0 10 6'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
                                fill='#2C2C2C'
                            />
                        </svg>
                        <b>Сортировка по:</b>
                        <span>{selectedName}</span>
                    </div>
                    <div className='sort__popup'>
                       {
                            visiblePopup ? 
                            <ul>
                                {listCategoriesPopup}
                            </ul>
                            :
                            undefined
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;