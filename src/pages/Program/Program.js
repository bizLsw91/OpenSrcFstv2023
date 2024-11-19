import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import ProgramArea from "./ProgramArea/ProgramArea";

const Program = () => {
    return (
        <div id="Program">
            <PageHelmet pageTitle="프로그램" />
            <HomeOneHeader/>
            <CommonPageHeader title="Program" level_1={'프로그램'} level_2="프로그램" />
            <ProgramArea/>
            <Footer/>
        </div>
    );
};

export default Program;