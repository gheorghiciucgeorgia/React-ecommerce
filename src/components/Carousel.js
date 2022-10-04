import React, { Component } from 'react';
import '../Styles/Carousel/Carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img_1 from '../img/background images/img_1.png';
import img_2 from '../img/background images/img_2.png';
import img_3 from '../img/background images/img_3.png';
import img_4 from '../img/background images/img_4.png';

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className='carousel-container'>
      <Slider {...settings}>
        <div className='Slide'>
          <p className='first-slide'>-20% sale</p>
          <p className='first-slidis'>Explore the new Collection</p>
          <img src={img_1} />
        </div>
        <div className='Slide'>
          <p className='second-slide'>Autumn-Winter Collection 2021</p>
          <img src={img_2} />
          <button className='second-slide-btn'>See more</button>
        </div>
        <div className='Slide'> 
          <img src={img_3} />
          <p className='third-slide'>Bussines Attire</p>
          <button className='third-slide-btn'>Check out</button>
        </div>
        <div className='Slide'>
          <p className='fourth-slide'>It`s time for sweaters and coziness. Winter is here and it`s better to be hot than not.</p>
          <img src={img_4} />
        </div>
      </Slider>
    </div>
  );
}


