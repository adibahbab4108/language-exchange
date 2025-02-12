import React from 'react';
import Banner from '../components/Banner/Banner';
import Stats from '../components/Stats';
import LanguageCategory from '../components/LanguageCategory';
import FeatureText from '../components/FeatureText';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <FeatureText/>
            <Stats/>
            <LanguageCategory/>
            <HowItWorks/>
            <Testimonials/>
        </div>
    );
};

export default Home;