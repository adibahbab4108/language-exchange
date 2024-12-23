import React from 'react';
import Banner from '../components/Banner/Banner';
import Stats from '../components/Stats';
import LanguageCategory from '../components/LanguageCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Stats/>
            <LanguageCategory/>
        </div>
    );
};

export default Home;