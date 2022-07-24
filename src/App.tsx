import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './components/Main';
import { Basket } from './components/Basket/Basket';
import { Layout } from './components/Layout';

function App() {
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
