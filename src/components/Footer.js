import React from 'react'
import '../Styles/PageContent/PageContent.scss';
import '../Styles/Footer/Footer.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faPinterestP } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='contact'>
                <p><FontAwesomeIcon icon={faShirt} />Shirt</p>
                <div class="adress">
                    <p>Pennsylvania, Bridgeville, 2409 Pine Street, 15017</p>
                    <p>
                        <a href='tel:412-292-3826'>412-292-3826</a>
                    </p>
                    <p>
                        <a href='mailto:bruck@yahoo.ca'>bruck@yahoo.ca</a>
                    </p>

                </div>
            </div>
            <div class="pages">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className='social'>
                <a href='https://www.facebook.com/'>
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href='https://www.google.com/'>
                    <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href='https://www.twitter.com/'>
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href='https://www.pinterest.com/'>
                    <FontAwesomeIcon icon={faPinterestP} />
                </a>
            </div>
        </div>
    )
}
