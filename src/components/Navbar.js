import React from 'react';
import { useState } from 'react';
import '../Styles/Navbar/Navbar-style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faHeart, faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import { Link } from 'react-router-dom';


export default function Navbar({cart}) {

    const [openModal, setOpenModal] = useState(false)
    function modalOpen() {
        setOpenModal(true);
    }


    return (
        <nav className='navbar'>
            <Link className='logo-link' to='/'>
                <div className='left'>
                    <p><FontAwesomeIcon className="logo" icon={faShirt} /> </p>
                    <p className='title'>Shirt</p>
                </div>
            </Link>
            <div className='center'>
                <p><FontAwesomeIcon className="search-icon" icon={faSearch} /></p>
                <input className="search-box" type="text" />
            </div>
            <div className='right'>
                <button className='openModalUser'>
                    <FontAwesomeIcon className="user-icon" icon={faUser} onClick={modalOpen} />
                    {openModal && <Modal closeModal={setOpenModal} />}
                </button>
                <button>
                    <FontAwesomeIcon className="heart-icon" icon={faHeart} />
                    <span className='ellipse'>0</span>
                </button>
                <button>
                    <Link className='cart-link' to='/cart'>
                        <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                    </Link>
                    <span className='ellipse'>0</span>
                </button>

            </div>
        </nav>
    )
}
