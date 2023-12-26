import { useEffect, useState, useContext, useRef } from 'react';

import { useNavigate } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';
import {setFilters} from '../redux/slices/filterSlice'; 
import {fetchPizzas} from '../redux/slices/pizzaSlice'; 
import {selectFilter} from '../redux/slices/filterSlice'; 

import Categories from '../components/categories/Categories';
import PizzaList from '../components/pizza-list/PizzaList';

import {categoriesPopup} from '../components/categories/Categories';

import {SearchContext} from '../App';



const Home = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {categoryId, sort, currentPage} = useSelector(selectFilter);
  
    const isSearch = useRef(false);
    const isMounted = useRef(false);

    const {search, setSearch} = useContext(SearchContext);


    const getPizzas = async () => {
        

        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sort.sortProperty.replace('-', '');
        const category = categoryId  > 0 ? `category=${categoryId}` : '';
        const searchValue = search ? `&search=${search}` : '';

        dispatch(fetchPizzas({
          order,
          sortBy,
          category,
          searchValue,
          currentPage
        }));
       
        window.scrollTo(0, 0);
    };

	// Если не было первого ренедера, то не делаем запрос к пиццам
    useEffect(() => {
		if (!isSearch.current) {
			getPizzas();
		}
		isSearch.current = false;
  	}, [categoryId, sort, search, currentPage])  

	// Если в url не было парамеров, то мы их добавляем
    useEffect(() => {
      if (window.location.search) {
        const parseInObj = (str) => {

          const obj = new URLSearchParams(str);
          const queryObject = Object.fromEntries(obj);
    
          return queryObject
    
        };

        const params = parseInObj(window.location.search.substring(1));
        const sortInObj = categoriesPopup.find(obj => obj.sortProperty === params.sortProperty)
        console.log(params)

        
        dispatch(setFilters({params, sortInObj}));
		    isSearch.current = true;
      }
    }, [])

	// Вшываем в url парметры, если они были, если их не было, то ставим isMounted.current = true;
    useEffect(() => {   
	  if (isMounted.current) {
		const stringify = (obj) => {

			const objKeys = Object.keys(obj);
			let string = '';
		  
			for (let i = 0; i < objKeys.length; i++) {
			  string += objKeys[i] + `=${obj[objKeys[i]]}&`;
			}
	  
			return string.slice(0, -1)
		  };

		const location = stringify({
			sortProperty: sort.sortProperty,
			categoryId,
			currentPage
		});

		navigate(`?${location}`)
	  }

      isMounted.current = true;
    }, [categoryId, sort.sortProperty, currentPage])   



    return (
        <>
            <Categories />
            <PizzaList search={search} /> 
                
        </>
    );
};

export default Home;