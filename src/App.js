import React from 'react';
import Products from './pages/Products';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import GreyFuzzySweater from './components/GreyFuzzySweater';
import Cart from './pages/Cart';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/greyfuzyswater' element={<GreyFuzzySweater/>}></Route>
        <Route path='/cart' element={<Cart/>} ></Route>
      </Routes>
    </>

  );

}

