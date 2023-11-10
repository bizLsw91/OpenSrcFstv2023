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
            <PageHelmet pageTitle="공지사항" />
            <HomeOneHeader/>
            <CommonPageHeader title="Notice Detail" subtitle="공지사항" />
            <NoticeDetailArea index={index}/>
            <Footer/>
        </div>
    );
};

export default NoticeDetail;