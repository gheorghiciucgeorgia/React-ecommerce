import React from 'react';
import '../Styles/Products/Products.scss';
import Navbar from '../components/Navbar';
import img1 from '../img/products/img1.png'
import img2 from '../img/products/img2.png'
import img3 from '../img/products/img3.png'
import img4 from '../img/products/img4.png'
import Footer from '../components/Footer';

export default function Products() {
  return (
    <div className='products'>
      <div className='page-content'>
        <Navbar></Navbar>
        <div className='products-preview'>
          <div className='title'>
            Products
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
          <div className='arrivals'>
            <div className='product'>
              <img src={img2} />
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
              <img src={img1} />
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
              <img src={img4} />
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
              <img src={img3} />
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
            <div className='product'>
              <img src={img1} />
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
          </div>          <div className='arrivals'>
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
          <div className='loading-btn'>
            <button>Load more</button>
          </div>
        </div>

      </div>
      <Footer></Footer>
    </div>
  )
}
