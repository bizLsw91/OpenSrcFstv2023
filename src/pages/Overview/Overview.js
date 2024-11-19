import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import OverviewArea from "./OverviewArea/OverviewArea";

const Overview = () => {
    return (
        <div id="Overview">
            <PageHelmet pageTitle="행사 개요" />
            <HomeOneHeader/>
            <CommonPageHeader title="Conference Overview" level_1={'행사안내'} level_2="행사 개요" />
            <OverviewArea/>
            <Footer/>
        </div>
    );
};

export default Overview;
