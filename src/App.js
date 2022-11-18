import React, { useState } from 'react';
import Products from './pages/Products';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import GreyFuzzySweater from './components/GreyFuzzySweater';
import Cart from './components/Cart';



export default function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    
  }
  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if(arr[ind].amount === 0) arr[ind].amount=1;
    setCart([...arr]);
  }
  return (
    <>
      <Routes >
        <Route path='/' element={<Home cart={cart}/>}></Route>
        <Route path='/products' element={<Products handleClick={handleClick} />}></Route>
        <Route path='/products/greyfuzyswater' element={<GreyFuzzySweater />}></Route>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}></Route>
      </Routes>
    </>

  );

}

