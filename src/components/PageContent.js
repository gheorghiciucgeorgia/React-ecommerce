import React from 'react';
import '../Styles/PageContent/PageContent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faBoxOpen, faCreditCard, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import img_8 from '../img/1/1.jpg';
import img_9 from '../img/2/1.jpg';
import img_10 from '../img/3/1.jpg';
import img_5 from '../img/background images/img_5.jpg';
import img1 from '../img/products/img1.png'
import img2 from '../img/products/img2.png'
import img3 from '../img/products/img3.png'
import img4 from '../img/products/img4.png'

export default function PageContent() {
    return (
        <div className='page-content'>
            <div className='payment-content'>
                <div className='free-shipping'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <div className='text'>
                        <div className='title'>
                            FREE SHiPPING
                        </div>
                        <div className='description'>
                            Free shipping on all US orders or orders above $200
                        </div>
                    </div>
                </div>
                <div className='return'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faBoxOpen} />
                    </div>
                    <div className='text'>
                        <div className='title'>
                            30 Days Return
                        </div>
                        <div className='description'>
                            Simply return orders within 30 days for an exchange
                        </div>
                    </div>
                </div>
                <div className='secure'>
                    <div className='icon'>
                        <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                    <div className='text'>
                        <div className='title'>
                            100% Payment Secure
                        </div>
                        <div className='description'>
                            Payment have never been more easier and secure
                        </div>
                    </div>
                </div>
            </div>
            <div className='topics-content'>
                <div className='left'>
                    <div className='top'>
                        <div className='left-top'>
                            <p className='title'>
                                sweaters
                            </p>
                            <button>Shop Now</button>
                            <img src={img_8} />

                        </div>
                        <div className='right-top'>
                            <p className='title'>
                                jeans
                            </p>
                            <button>shop now</button>
                            <img src={img_9} />

                        </div>
                    </div>
                    <div className='bottom-top'>
                        <p className='title'>
                            suits
                        </p>
                        <button>Shop now</button>
                        <img src={img_5} />

                    </div>
                </div>
                <div className='right'>
                    <p className='title'>
                        dresses
                    </p>
                    <button>shop now</button>
                    <img src={img_10} />

                </div>
            </div>
            <div className='products-preview'>
                <div className='title'>
                    New Arrivals
                </div>
                <div className='arrivals'>
                    <div className='product'>
                        <img src={img1} />
                        <div className='descript-title'>
                            Grey Fuzzy Swater
                        </div>
                        <div className='icons'>
                            <div className='descript-price'>
                                $21.99
                            </div>
                            <button className='cart'>Buy now</button>
                        </div>
                    </div>
                    <div className='product'>
                        <img src={img2} />
                        <div className='descript-title'>
                            Black Swater
                        </div>
                        <div className='icons'>
                            <div className='descript-price'>
                                $21.99
                            </div>
                            <button className='cart'>Buy now</button>
                        </div>
                    </div>
                    <div className='product'>
                        <img src={img3} />
                        <div className='descript-title'>
                            Grey Dress
                        </div>
                        <div className='icons'>
                            <div className='descript-price'>
                                $49.99
                            </div>
                            <button className='cart'>Buy now</button>
                        </div>
                    </div>
                    <div className='product'>
                        <img src={img4} />
                        <div className='descript-title'>
                            Blue Jacket
                        </div>
                        <div className='icons'>
                            <div className='descript-price'>
                                $55.99
                            </div>
                            <button className='cart'>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='newsletter'>
                <div className='title'>
                    newsletter
                </div>
                <div className='context'>
                    Subscribe to our newsletter for updates
                </div>
                <div className='subscribe-input'>
                    <FontAwesomeIcon className='icon' icon={faNewspaper} />
                    <input type='text' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className='footer'>
                <div className='contact'>
                    <p>Shirt</p>
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
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Products</a>
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
        </div>
    )
}
