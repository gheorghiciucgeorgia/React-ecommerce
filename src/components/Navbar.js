import React from 'react';
import { useState } from 'react';
import '../Styles/Navbar-style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faHeart, faSearch, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';


export default function Navbar() {

    const [openModal, setOpenModal] = useState(false)
    function modalOpen() {
        setOpenModal(true);
    }
    return (
        <nav className='navbar'>
            <div className='left'>
                <p><FontAwesomeIcon className="logo" icon={faShirt} /> </p>
                <p className='title'>Shirt</p>
            </div>
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
                </button>
                <button>
                    <FontAwesomeIcon className="cart-icon" icon={faCartShopping} />
                </button>

            </div>
        </nav>
    )
}
