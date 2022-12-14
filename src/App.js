import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import PizzaList from './components/pizza-list/PizzaList';

import './App.scss';


function App() {
    return (
        <div className="App">
            <Header />
            <div className='hr'></div>
            <Categories/>
            <PizzaList/>
        </div>
    );
}

export default App;
