import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './components/Main';
import { Basket } from './components/Basket/Basket';
import { Layout } from './components/Layout';

import { getFullData } from './lib/firebase';
import { useAppDispatch } from './hooks/redux/useAppDispatch';
import { getPizzas } from './redux/slices/pizzasSlice';
import { getCart } from './redux/slices/cartSlice';

function App() {
  const dispath = useAppDispatch();

  React.useEffect(() => {
      getFullData()
        .then(res => {
          localStorage.setItem('initial', JSON.stringify(res.pizzas));
          dispath(getPizzas(res.pizzas));
          dispath(getCart(res.cart));
        })
        .catch(e => console.log(e));
  }, [dispath]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='cart' element={<Basket />}/>
        </Route>      
      </Routes>
    </div>
  );
}

export default App;
