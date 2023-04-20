import Header from './components/header/Header';
import Home from './pages/Home';
import NotFoundBlock from './components/notFoundBlock/NotFoundBlock';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.scss';


function App() {
    return (
        <div className="App">
            <Header />
            <div className='hr'></div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<NotFoundBlock/>} />
            </Routes>
        </div>
    );
}

export default App;
