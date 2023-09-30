import React from 'react';
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/navbar';
import { ShopContaxtProvider } from './context/shop-contaxt';


function App() {
  console.log('me')
  return (
    <div className='app'>
      <ShopContaxtProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
        </ShopContaxtProvider>
    </div>
  )

}

export default App;
