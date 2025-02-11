import React from 'react';
import Banner from '../components/Banner/Banner';
import Stats from '../components/Stats';
import LanguageCategory from '../components/LanguageCategory';
import FeatureText from '../components/FeatureText';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <FeatureText/>
            <Stats/>
            <LanguageCategory/>
        </div>
    );
};

export default Home;