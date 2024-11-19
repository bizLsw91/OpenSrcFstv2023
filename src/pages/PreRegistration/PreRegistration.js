import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import PreRegistrationArea from "./PreRegistrationArea/PreRegistrationArea";

const PreRegistration = () => {
    return (
        <div id="PreRegistration">
            <PageHelmet pageTitle="사전등록" />
            <HomeOneHeader/>
            <CommonPageHeader title="Pre-Registration" level_1={'사전등록'} level_2="사전등록" />
            <PreRegistrationArea/>
            <Footer/>
        </div>
    );
};

export default PreRegistration;