import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import DocRefusalArea from "./DocRefusalArea/DocRefusalArea";

const DocRefusal = () => {
    return (
        <div id="DocRefusal">
            <PageHelmet pageTitle="이메일주소 무단수집 거부" />
            <HomeOneHeader/>
            <CommonPageHeader title="No Email Scraping" subtitle="이메일주소 무단수집 거부" />
            <DocRefusalArea/>
            <Footer/>
        </div>
    );
};

export default DocRefusal;