import React from 'react';
import Products from './pages/Products';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products/>}></Route>
      </Routes>
    </>

  );

}

