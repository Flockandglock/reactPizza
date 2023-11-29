import React, { useState } from 'react';

import Header from './components/header/Header';
import Home from './pages/Home';
import NotFoundBlock from './components/notFoundBlock/NotFoundBlock';
import Cart from './pages/Cart';

import { BrowserRouter, Route, Routes } from 'react-router-dom';




import './App.scss';

export const SearchContext = React.createContext();


function App() {

    const [search, setSearch] = useState('');


    return (
        <div className="App">
            <SearchContext.Provider value={{search, setSearch}}>
                <Header  />
                <div className='hr'></div>
                <Routes>
                    <Route path='/' element={<Home search={search} />} />
                    <Route path='*' element={<NotFoundBlock/>} />
                    <Route path='cart' element={<Cart/>} />
                </Routes>
            </SearchContext.Provider>
        </div>
    );
}

export default App;
