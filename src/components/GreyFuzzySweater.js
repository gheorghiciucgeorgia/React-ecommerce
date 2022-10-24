import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PLP/PLP.scss';
import '../Styles/PageContent/PageContent.scss'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img_1 from '../img/1/1.jpg';
import img_2 from '../img/1/2.jpg';
import img_3 from '../img/1/3.jpg';
import img_4 from '../img/1/4.jpg';
import img_5 from '../img/1/5.jpg';
import img_6 from '../img/1/6.jpg';
import img_7 from '../img/1/7.jpg';
import img_8 from '../img/1/8.jpg';
import img2 from '../img/products/img2.png';
import img3 from '../img/products/img3.png';
import img4 from '../img/products/img4.png';



export default function GreyFuzzySweater() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (
        <div className='page-content'>
            <Navbar></Navbar>
            <div className='PLP-content'>
                <div className='pages'>
                    <Link to='/' className='links'>Home</Link>
                    <p>/</p>
                    <Link to='/products' className='links'>Products</Link>

                </div>

                <div className='PLP-product'>
                    <div className='product-left'>
                        <div className='left-top'>
                            <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
                                <div className='Slide'>
                                    <img src={img_1} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_2} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_3} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_4} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_5} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_6} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_7} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_8} />
                                </div>
                            </Slider>
                        </div>
                        <div className='left-bottom'>


                            <Slider
                                asNavFor={nav1}
                                ref={(slider2) => setNav2(slider2)}
                                slidesToShow={4}
                                swipeToSlide={true}
                                focusOnSelect={true}
                            >
                                <div className='Slide'>
                                    <img src={img_1} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_2} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_3} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_4} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_5} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_6} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_7} />
                                </div>
                                <div className='Slide'>
                                    <img src={img_8} />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className='product-right'>
                        <div className='title'>Grey Fuzzy Sweater</div>
                        <div className='price'>$21.99</div>
                        <div className='cart'>
                            <button className='add-to-cart'>Add to Cart</button>
                            <div className='quantity'>
                                <button className='minus'>-</button>
                                <input type='button' value={1} />
                                <button className='plus'>+</button>
                            </div>
                        </div>

                        <div className='description'>
                            Fuzzy Sweater turtle neck and long sleves. Great for cold weather.
                        </div>
                    </div>
                </div>
                <div className='other-products'>
                    <div className='title'>
                        Check out other products
                    </div>
                    <div className='products-preview'>
                        <div className='arrivals'>
                            <div className='product'>
                                <img src={img4} />
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
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
