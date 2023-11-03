import React from 'react';
import HomeOneHeader from './HomeOneHeader/HomeOneHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeKeyVisual from "./HomeKeyVisual/HomeKeyVisual";
import HomeArea from "./HomeArea/HomeArea";


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Home Page" />
            <HomeOneHeader/>
            <HomeKeyVisual/>
            <HomeArea/>
            <Footer/>
        </>
    );
};

export default Home;