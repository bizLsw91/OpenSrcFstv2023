import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import DocPrivacyArea from "./DocPrivacyArea/DocPrivacyArea";

const DocPrivacy = () => {
    return (
        <div id="DocPrivacy">
            <PageHelmet pageTitle="개인정보취급방침" />
            <HomeOneHeader/>
            <CommonPageHeader title="Privacy Policy" subtitle="개인정보취급방침" />
            <DocPrivacyArea/>
            <Footer/>
        </div>
    );
};

export default DocPrivacy;