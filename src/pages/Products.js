import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Products/Products.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data';

export default function Products() {
  const [noOfElements, setnoOfElements]=useState(4);
  const loadMore=()=>{
    setnoOfElements(noOfElements+4);
    console.log(noOfElements)
  }
  const slice=data.cardData.slice(0,noOfElements);
  return (
    <div className='products'>
      <div className='page-content'>
        <Navbar></Navbar>
        <div className='products-preview'>
          <div className='title'>
            Products
          </div>
          <div className='arrivals '>
            {slice.map((item, index) => {
              return (
                <div className='product'>
                  <img src={item.img} />
                  <div className='descript-title'><Link to="/products/greyfuzyswater" className='links'>{item.title}</Link></div>
                  <div className='icons'>
                    <div className='descript-price'>{item.price}</div>
                    <button className='cart'>Buy now</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='loading-btn'>
            <button onClick={()=>loadMore()}>Load more</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
