import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import DirectionsArea from "./DirectionsArea/DirectionsArea";

const Overview = () => {
    return (
        <div id="Overview">
            <PageHelmet pageTitle="오시는 길" />
            <HomeOneHeader/>
            <CommonPageHeader title="Directions" level-1={'행사안내'} level_2="오시는 길" />
            <DirectionsArea/>
            <Footer/>
        </div>
    );
};

export default Overview;
