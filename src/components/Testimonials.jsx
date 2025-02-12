import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import SectionTitle from './shared/SectionTitle';

const Testimonials = () => {
    const [usersReview, setUsersReview] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("testimonials.json")
            .then(res => res.json())
            .then(data => {
                setUsersReview(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching testimonials:", error);
                setLoading(false);
            });
    }, []); 

    if (loading) return <p>Loading...</p>;
    return (
        <>
        <div className='py-10 mt-20'>
            <SectionTitle title="Reviews"/>
            <Swiper
                effect={'flip'}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className="mySwiper "
            >
                {
                    usersReview.map((userReview, index) => (
                        <>
                            <SwiperSlide key={index} >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl  pb-10">
                                    {/* Image Section */}
                                    <div className="relative w-full flex justify-center">
                                        <img src={userReview.image} className="w-full h-96 object-cover rounded-xl shadow-md" />
                                        <h2 className="absolute bottom-0 w-full  text-center font-bold text-lg bg-gray-700/70 px-4 py-2 text-white rounded-b-xl">
                                            {userReview.name}
                                        </h2>
                                    </div>

                                    {/* Review Section */}
                                    <div className="flex flex-col justify-center gap-4 text-center md:text-left">
                                        {/* Review Text */}
                                        <p className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed">
                                            <span className="text-4xl text-gray-500">“</span>
                                            {userReview.review}
                                            <span className="text-4xl text-gray-500">”</span>
                                        </p>

                                        {/* Rating Section */}
                                        <div className="flex flex-col items-center md:items-start">
                                            <span className="font-semibold text-gray-800 dark:text-gray-300">Rating:</span>
                                            <div className="rating rating-sm flex">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <input
                                                        key={i}
                                                        type="radio"
                                                        name={`rating-${userReview.id}`}
                                                        className={`mask mask-star-2 ${i < userReview.rating ? 'bg-orange-400' : 'bg-gray-300'}`}
                                                        disabled
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Language Learned */}
                                        <div className="text-gray-600 dark:text-gray-400 ">
                                            <span className="font-bold  ">Language Learned:</span> <span className=''>{userReview.languageLearned}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </>

                    ))
                }



            </Swiper>
            
        </div>
        </>
    );
};

export default Testimonials;