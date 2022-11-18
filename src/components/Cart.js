import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../Styles/Cart/Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faFaceSadTear } from '@fortawesome/free-solid-svg-icons';



export default function Cart({ cart, setCart, handleChange }) {
    const [price, setPrice] = useState(0);
    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    }
    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    }

    useEffect(() => {
        handlePrice();
    })
    console.log(cart);
    return (
        <div>
            <Navbar></Navbar>
            <div className='cart-component'>
                <div className='cart-items-header'>Cart Items</div>

                {cart.length === 0 && (<div className='cart-items-empty'>No items are added <FontAwesomeIcon icon={faFaceSadTear} /></div>)}
                <div>
                    <div className='cart-items-component'>

                        {cart.map((item) => {
                            return (
                                <div className='cart-box' key={item.id}>
                                    <div className='image-and-title'>
                                        <img src={item.img} alt='' />
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='amount'>
                                        <button onClick={() => handleChange(item, -1)}>-</button>
                                        <button className='amount-number'>{item.amount}</button>
                                        <button onClick={() => handleChange(item, 1)}>+</button>
                                    </div>
                                    <div className='prices'>
                                        <p>${item.price * item.amount}</p>

                                    </div>
                                    <div className='removing'>
                                        <button onClick={() => handleRemove(item.id)}>x</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {cart.length !== 0 &&
                        (<div>
                            <div className='total'>
                                <span> Total of your cart  <FontAwesomeIcon icon={faCartShopping} /></span>
                                <span className='price'> ${price.toFixed(2)}</span>
                            </div>
                            <div className='buy-now-button'>
                                <button >Buy now</button>
                            </div>
                        </div>)}

                </div>
            </div>


        </div>
    )
}
