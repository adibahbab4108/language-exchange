import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    return (

        <div className='bg-gray-400'>
            <div className='md:flex  container mx-auto py-10'>
                <div className='place-content-center font-bold text-4xl m-5 text-center'>
                    Learn faster
                    with your best
                    language tutor.

                </div>
                <div className='m-5 text-center'>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Banner;