import { useState, useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {setCategoryId, setSortType} from '../../redux/slices/filterSlice';
import {selectFilter} from '../../redux/slices/filterSlice'; 

import './_categories.scss';


export const categoriesPopup = [
    {name: 'популярности (DESC)', sortProperty: 'rating'},
    {name: 'популярности (ASC)', sortProperty: '-rating'},
    {name: 'цене (DESC)', sortProperty: 'price'},
    {name: 'цене (ASC)', sortProperty: '-price'},
    {name: 'алфавиту (DESC)', sortProperty: 'title'},
    {name: 'алфавиту (ASC)', sortProperty: '-title'}
];

const ClickOutsideHandler = ({ onClickOutside, children }) => {
    const wrapperRef = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          onClickOutside();
        }
      };
  
      document.addEventListener('click', handleClickOutside);
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [onClickOutside]);
  
    return <div ref={wrapperRef} className='sort__dropdown'>{children}</div>;
};


const Categories = () => {

    const dispatch = useDispatch();

    const {categoryId, sort} = useSelector(selectFilter);
   

    // Данные для категорий и попапа
    const [dropdown, setDropdown] = useState(false);
    
    const categoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    const onChangeCategory = (index) => {
        dispatch(setCategoryId(index));
    };

    // Закрываем наш dropdown
    const closeDropdown = () => {
        setDropdown(false);
      };

    //Тоглим активные индексы 
    const toogleActivePopup = (obj) => {
        dispatch(setSortType(obj));
        setDropdown(false);
    };

    // Возвращаем список
    const renderCategories = (arr) => {
        return arr.map((item, index) => 
        <li key={index} onClick={() => onChangeCategory(index)} className={categoryId === index ? 'active' : ''}>{item}</li>)  
    };

    const renderCategoriesPopup= (arr) => {
        return arr.map((obj, index) => 
             <li key={index} onClick={() => toogleActivePopup(obj)} className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>{obj.name}</li>
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
                        onClick={() => setDropdown(!dropdown)}>
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
                        <span>{sort.name}</span>
                    </div>
                    
                       {
                            dropdown ? 
                            <ClickOutsideHandler onClickOutside={closeDropdown}>
                                <ul>
                                    {listCategoriesPopup}
                                </ul>
                            </ClickOutsideHandler>
                            :
                            undefined
                        }
                    
                </div>
            </div>
        </div>
    );
};

export default Categories;
