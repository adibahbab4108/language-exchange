import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    return (

        <div className=' '>
            <div className='md:flex  container mx-auto py-10 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 '>
                <div className='place-content-center font-bold text-4xl m-5 '>
                    <h2 className='text-center text-black'>

                        Learn faster
                        with your best
                        language tutor.
                    </h2>

                </div>
                <div className='m-5 text-center'>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Banner;