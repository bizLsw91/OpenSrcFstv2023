import React, {useContext} from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import appConfig from "../../../config/app.config";
import {AppContext} from "../../../context/AllContext";

const isShow = appConfig.isShow
const HomeKeyVisual = () => {
    const {isOverDeadLine} = useContext(AppContext);
   return (
      <>
         <section className="home_slider_1">
               <Container className="h1_slider_wrapper h-100">
                        <div className="slider__content-6">
                           <img className="logo-top" src="assets/img/banner/top.png" alt=""/>
                           <img className="logo-keyvisual" src="assets/img/banner/keyvisual_desktop_text.png" alt=""/>
                           <div className="slider__btn mainBannerBtn">
                              {!isOverDeadLine() &&
                                  <div className="preRegistration">
                                    <Link to="/preRegistration" className="z-btn-main z-btn-transparent">사전등록</Link>
                                    <div className="info">등록마감: 11. 30.(금) 10:00 까지</div>
                                  </div>
                              }
                           </div>
                           <img className="logo-bottom" src="assets/img/banner/host.png" alt=""/>
                        </div>
               </Container>
         </section>
      </>
   );
};

export default HomeKeyVisual;