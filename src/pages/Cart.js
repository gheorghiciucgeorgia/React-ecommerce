import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import data from '../data';


export default function Cart(props) {
    const { item, onAdd, onRemove } = props;
    return (
        <div className='cart-page-content'>
            <Navbar></Navbar>

            <Footer></Footer>

        </div>
    )
} 