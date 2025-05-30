// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import images
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/user10.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/img6.jpg';

import { useRef } from 'react';

const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    // Define the function properly
    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper  rounded-xl  h-96 w-96"
            >
                {/* Use images inside SwiperSlide */}
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img1} alt="Slide 1" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img2} alt="Slide 2" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img3} alt="Slide 3" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img4} alt="Slide 4" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img5} alt="Slide 5" className='w-full h-full object-cover' />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={img6} alt="Slide 6" className='w-full h-full object-cover' />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
