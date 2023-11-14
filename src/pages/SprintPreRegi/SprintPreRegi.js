import PageHelmet from "../../components/shared/PageHelmet";
import React from "react";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import SprintPreRegiArea from "./SprintPreRegiArea/SprintPreRegiArea";

const SprintPreRegi = () => {
    return (
        <div cl="SprintPreRegi">
            <PageHelmet pageTitle="Sprint사전신청" />
            <HomeOneHeader/>
            <CommonPageHeader title="Sprint Pre-Registration" subtitle="Sprint 사전신청" />
            <SprintPreRegiArea/>
            <Footer/>
        </div>
    );
};

export default SprintPreRegi;
