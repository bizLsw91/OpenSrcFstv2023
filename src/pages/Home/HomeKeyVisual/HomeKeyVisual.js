import React, {useContext, useEffect, useState} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import appConfig from "../../../config/app.config";
import {AppContext} from "../../../context/AllContext";

const isShow = appConfig.isShow
const HomeKeyVisual = () => {
    const {isOverDeadLine} = useContext(AppContext);
    const [isOver, setIsOver] = useState(false);
    useEffect(() => {
        const checkDeadline = async () => {
            try {
                const result = await isOverDeadLine();
                setIsOver(result);
            } catch (error) {
                console.error("Error checking deadline:", error);
            }
        };

        checkDeadline();
    }, [isOverDeadLine]);

    return (
        <>
            <section className="key-visual">
                <div className={'key-visual-bg_layer'}>
                    <div className="layer-2"></div>
                    <div className="layer-3"></div>
                </div>
                <Container className="h1_slider_wrapper h-100">
                    <div className="slider__content-6">
                        <div className="keyvisual-mid">
                            <div className="wrapper-3">
                                <img className="keyvisual-top" src="assets/img/2024design/keyvisual-top-1294.png"
                                     alt="keyvisual-top"/>
                            </div>
                            <img className="mid1" src="assets/img/2024design/keyvisual-mid1.png" alt="keyvisual-mid1"/>
                            <img className="mid2" src="assets/img/2024design/keyvisual-mid2.png" alt="keyvisual-mid2"/>
                        </div>
                        <div className="slider__btn mainBannerBtn">
                            {!isOver ?
                                <div className="preRegistration">
                                    <Link to="/"
                                          className={`z-btn-main z-btn-transparent z-btn-disable`}>사전등록</Link>
                                    <div className="info">2024.11.20 (수) 12:00 부터 신청가능</div>
                                </div> :
                                <div className="preRegistration">
                                    <Link to="https://www.onoffmix.com/event/313420"
                                          className={`z-btn-main z-btn-transparent`}>사전등록</Link>
                                    <div className="info">2024.12.6 (금) 12:00 까지 선착순 정원 500명 신청가능</div>
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