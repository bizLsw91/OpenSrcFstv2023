import React from 'react';
import HomeOneHeader from './HomeOneHeader/HomeOneHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import HomeKeyVisual from "./HomeKeyVisual/HomeKeyVisual";


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Home Page" />
            <HomeOneHeader/>
            <HomeKeyVisual/>
            <Footer/>
        </>
    );
};

export default Home;