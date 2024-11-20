import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
   let docUrl1 = "/docTerms";
   let docUrl2 = "/docPrivacy";
   let docUrl3 = "/docRefusal";


   return (
      <>
         <footer className="footer footer__area">
            <div className="footer__horizontal-line"></div>
            <div className="footer__copyright-wrap">
               <Container>
                  <div className="logo mb-20">
                     <NavLink to="/">
                        <img src="https://ossfestival.kr/assets/img/2024design/logo.png" alt="logo"/>
                     </NavLink>
                  </div>
                  <div className="footer__horizontal-line d-md-none mt-10 mb-10"></div>
                  <Row md={2} className="d-flex">
                     <Col md={{span:6, order:2}} className="d-flex justify-content-start align-content-md-center flex-column justify-content-md-end">
                        <div className="justify-content-start">
                           <div className="d-flex flex-column justify-content-start flex-sm-row flex-sm-wrap justify-content-md-end">
                              <span className="d-inline-block mb-10"><Link to={docUrl1} className="fw-bold">이용약관</Link></span>
                              <span className="d-none d-sm-inline">&nbsp;|&nbsp;</span>
                              <span className="d-inline-block mb-10"><Link to={docUrl2} className="fw-bold">개인정보취급방침</Link></span>
                              <span className="d-none d-sm-inline">&nbsp;|&nbsp;</span>
                              <span className="d-inline-block mb-10"><Link to={docUrl3} className="fw-bold">이메일주소 무단수집 거부</Link></span>
                           </div>
                        </div>
                        <div className="d-flex justify-content-md-end">
                           <a href='https://www.youtube.com/watch?v=DVMOREXMIAo&list=PL8MaVgZDhGk-mVoB9he8ofPqj24_4Bb1N' className="mr-10">
                              <img src="https://ossfestival.kr/assets/img/brand/youtubeIcon.png" className="icon" alt="YouTube"/>
                           </a>
                           <a href="https://www.facebook.com/OpenUP_OSS">
                              <img src="https://ossfestival.kr/assets/img/brand/facebook.png" className="icon" alt="Facebook"/>
                           </a>
                        </div>
                     </Col>
                     <div className="footer__horizontal-line d-md-none mt-10 mb-10"></div>
                     <Col md={{span:6, order:1}} className="d-flex align-items-md-end">
                        <div className="copyright-text">
                           <p>Copyright © 2024<Link to="/"> OSSFESTIVAL.KR.</Link>&nbsp;&nbsp;All Rights Reserved.</p>
                           <p>Contact: <a className="underline__black" href="mailto:ossfestival2024@gmail.com">ossfestival2024@gmail.com</a></p>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </footer>
      </>
   );
};

export default Footer;