import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import FaqArea from "./FaqArea/FaqArea";

const Faq = () => {
    return (
        <div id="Faq">
            <PageHelmet pageTitle="FAQ" />
            <HomeOneHeader/>
            <CommonPageHeader title="FAQ" subtitle="FAQ" />
            <FaqArea/>
            <Footer/>
        </div>
    );
};

export default Faq;