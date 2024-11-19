import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import NoticeArea from "./NoticeArea/NoticeArea";

const Notice = () => {
    return (
        <div id="Notice">
            <PageHelmet pageTitle="공지사항" />
            <HomeOneHeader/>
            <CommonPageHeader title="Notice" level_1={'게시판'} level_2="공지사항" />
            <NoticeArea/>
            <Footer/>
        </div>
    );
};

export default Notice;