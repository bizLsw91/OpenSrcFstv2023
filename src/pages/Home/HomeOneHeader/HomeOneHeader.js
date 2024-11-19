import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {Link, NavLink} from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';
import {Col, Container, Row} from "react-bootstrap";
import MobileMenu from "../../../components/TopMenu/MobileMenu";
import appConfig from "../../../config/app.config";

const isShow = appConfig.isShow
const HomeOneHeader = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {stickyMenu} = useGlobalContext();
    return (
        <>
            {isShow &&
                <header>
                    <div className="header__area p-relative header__transparent">
                        <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
                            <Container>
                                <Row className="align-items-center">
                                    <Col xl={3} lg={3} md={6} sm={6} xs={6}>
                                        <div className="logo">
                                            <NavLink to="/">
                                                {/*<div className={'logo-div'}/>*/}
                                                <img src="https://ossfestival.kr/assets/img/2024design/logo.png" alt="logo"/>
                                            </NavLink>
                                        </div>
                                        <div className="logo-gradient">
                                            <div>
                                                <h4>
                                                    <NavLink to="/">공개SW 페스티벌 2024</NavLink>
                                                </h4>
                                            </div>
                                            {/*<img src="assets/img/logo/logo.png" alt="logo"/>*/}
                                        </div>
                                    </Col>
                                    <Col xl={9} lg={9} md={6} sm={6} xs={6}>
                                        <div
                                            className="header__bottom-right d-flex justify-content-end align-items-center">
                                            <div className="main-menu menu_wrapper_one">
                                                <MobileMenu/>
                                            </div>
                                            <div onClick={handleShow} className="sidebar__menu d-lg-none">
                                                <div className="sidebar-toggle-btn" id="sidebar-toggle">
                                                    <span className="line"></span>
                                                    <span className="line"></span>
                                                    <span className="line"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className="header__search-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form action="#">
                                            <input type="text" placeholder="Your Keywords"/>
                                            <button type="button"><i> <FaSearch/> </i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="body-overlay-2"></div>
                    </div>
                </header>
            }


            {isShow && <Sidebar show={show} handleClose={handleClose}/>}
        </>
    );
};

export default HomeOneHeader;