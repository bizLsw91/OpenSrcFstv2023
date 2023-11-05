import PageHelmet from "../../components/shared/PageHelmet";
import HomeOneHeader from "../Home/HomeOneHeader/HomeOneHeader";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import Footer from "../../components/shared/Footer";
import React from "react";
import LoginArea from "./LoginArea/LoginArea";

const Login = () => {
    return (
        <div id="Login">
            <PageHelmet pageTitle="로그인" />
            <HomeOneHeader/>
            <CommonPageHeader title="Login" subtitle="로그인" />
            <LoginArea/>
            <Footer/>
        </div>
    );
};

export default Login;