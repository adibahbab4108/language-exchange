import React from 'react';
import Carousel from './Carousel';

const Banner = () => {
    return (
            <div className='md:flex py-4 md:pt-36 md:pb-20 items-center gap-4 justify-center '>
                <div className='flex items-center font-bold text-5xl md:w-96 h-96 '>
                    <h2 className='text-center text-gray-700 dark:text-white'>
                        Learn faster with your best language tutor.
                    </h2>
                </div>
                <div className=' text-center '>
                    <Carousel />
                </div>
            </div>

    );
};

export default Banner;