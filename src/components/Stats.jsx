import React from 'react';

const Stats = () => {
    return (

        <div className='py-10 mt-20'>
            <div className='flex justify-between text-center flex-wrap gap-5'>
                <div className='w-52 shadow-lg p-4 rounded-sm'>
                    <h2 className='text-2xl font-bold text-gray-700 '>32,000+</h2>
                    <p className='text-gray-500 text-xl font-bold '>Experienced Tutors</p>
                </div>
                <div className='w-52 shadow-lg p-4 rounded-sm'>
                    <h2 className='text-2xl font-bold text-gray-700'>30,0000+</h2>
                    <p className='text-gray-500 text-xl font-bold'>5-star Tutor reviews</p>
                </div>
                <div className='w-52 shadow-lg p-4 rounded-sm'>
                    <h2 className='text-2xl font-bold text-gray-700'>120+</h2>
                    <p className='text-gray-500 text-xl font-bold'>Subjact Taught</p>
                </div>
                <div className='w-52 shadow-lg p-4 rounded-sm'>
                    <h2 className='text-2xl font-bold text-gray-700'>150+</h2>
                    <p className='text-gray-500 text-xl font-bold'>Tutor nationalities</p>
                </div>
                <div className='w-52 shadow-lg p-4 rounded-sm '>
                    <h2 className='text-2xl font-bold text-gray-700'>4.8</h2>
                    <p className='text-gray-500 text-xl font-bold'>On the app store</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;