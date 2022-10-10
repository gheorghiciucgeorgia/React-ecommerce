import React from 'react';
import Carousel from '../components/Carousel';
import Navbar from '../components/Navbar';
import PageContent from '../components/PageContent';
import Products from './Products';



export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <PageContent /> 
        </div>
    )
}
