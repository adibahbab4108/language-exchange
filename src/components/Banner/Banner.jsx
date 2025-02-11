import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    return (

        <div className=''>
            <div className='md:flex container mx-auto py-10 items-center justify-center'>
                <div className='flex items-center font-bold text-4xl m-5 w-96 h-96'>
                    <h2 className='text-center text-gray-700 dark:text-white'>
                        Learn faster with your best language tutor.
                    </h2>
                </div>
                <div className=' text-center '>
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Banner;