import React from "react";
import {useLocation} from "react-router-dom";
import NoticeDetailArea from "./NoticeDetailArea/NoticeDetailArea";
import PageHelmet from "../../../components/shared/PageHelmet";
import HomeOneHeader from "../../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../../components/shared/Footer";

const NoticeDetail = () => {
    const location = useLocation();
    const index = location.state.index

    return (
        <div id="NoticeDetail">
            <PageHelmet pageTitle="공지사항 상세" />
            <HomeOneHeader/>
            <CommonPageHeader title="NoticeDetail" level_1={'게시판'} level_2="공지사항" level_3="공지사항 상세" />
            <NoticeDetailArea index={index}/>
            <Footer/>
        </div>
    );
};

export default NoticeDetail;