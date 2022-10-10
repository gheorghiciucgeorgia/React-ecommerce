import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import PageContent from '../components/PageContent';


export default function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <PageContent />
        </div>
    )
}
