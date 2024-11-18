import React, {useContext} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import appConfig from "../../../config/app.config";
import {AppContext} from "../../../context/AllContext";

const isShow = appConfig.isShow
const HomeKeyVisual = () => {
    const {isOverDeadLine} = useContext(AppContext);
    return (
        <>
            <section className="key-visual">
                <div className={'key-visual-bg_layer'}>
                    <div className="layer-2"></div>
                    <div className="layer-3"></div>
                </div>
                <Container className="h1_slider_wrapper h-100">
                    <div className="slider__content-6">
                        <img className="keyvisual-top" src="assets/img/2024design/keyvisual-top-1294.png" alt="keyvisual-top"/>
                        <div className="keyvisual-mid">
                            <img className="mid1" src="assets/img/2024design/keyvisual-mid1.png" alt="keyvisual-mid1"/>
                            <img className="mid2" src="assets/img/2024design/keyvisual-mid2.png" alt="keyvisual-mid2"/>
                        </div>
                        <div className="slider__btn mainBannerBtn">
                            {!isOverDeadLine() &&
                                <div className="preRegistration">
                                    <Link to="/preRegistration" className="z-btn-main z-btn-transparent">사전등록</Link>
                                    <div className="info">등록마감: 11. 30.(금) 10:00 까지</div>
                                </div>
                            }
                        </div>
                        <img className="keyvisual-bottom" src="assets/img/2024design/keyvisual-bottom.png" alt=""/>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomeKeyVisual;