import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import EventArea from "./EventArea/EventArea";

const Event = () => {
    return (
        <div id="Event">
            <PageHelmet pageTitle="이벤트" />
            <HomeOneHeader/>
            <CommonPageHeader title="Event" level_1={'사전등록'} level_2="이벤트" />
            <EventArea/>
            <Footer/>
        </div>
    );
};

export default Event;