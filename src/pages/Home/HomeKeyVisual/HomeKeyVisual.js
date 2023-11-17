import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import appConfig from "../../../config/app.config";

const isShow = appConfig.isShow
const HomeKeyVisual = () => {
   return (
      <>
         <section className="home_slider_1">
               <Container className="h1_slider_wrapper h-100">
                        <div className="slider__content-6">
                           <img className="logo-top" src="assets/img/banner/top.png" alt=""/>
                           <img className="logo-keyvisual" src="assets/img/banner/keyvisual_desktop_text.png" alt=""/>
                           <div className="slider__btn mainBannerBtn">
                              {isShow && <Link to="/preRegistration" className="z-btn-main z-btn-transparent">사전등록</Link>}
                           </div>
                           <img className="logo-bottom" src="assets/img/banner/host.png" alt=""/>
                        </div>
               </Container>
         </section>
      </>
   );
};

export default HomeKeyVisual;