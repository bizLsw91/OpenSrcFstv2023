import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import DocTermsArea from "./DocTermsArea/DocTermsArea";

const DocTerms = () => {
    return (
        <div id="DocTerms">
            <PageHelmet pageTitle="이용약관" />
            <HomeOneHeader/>
            <CommonPageHeader title="Terms of Service" level_1={'Footer'} level_2="이용약관" />
            <DocTermsArea/>
            <Footer/>
        </div>
    );
};

export default DocTerms;