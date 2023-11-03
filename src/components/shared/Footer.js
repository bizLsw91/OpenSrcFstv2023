import React from 'react';
import { FaEnvelope, FaFacebookF, FaPhoneAlt, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import {Link, NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
   let docUrl1 = "/docTerm";
   let docUrl2 = "/docPersonal";
   let docUrl3 = "/docEmail";


   return (
      <>
         <footer className="footer footer__area">
            {/*<div className="footer-top footer__bg">*/}
            {/*   <Container>*/}
            {/*      <Row className="justify-content-between">*/}
            {/*         <Col xl={3} lg={4} md={6}>*/}
            {/*            <div className="footer-widget mb-50">*/}
            {/*               <div className="footer-logo mb-35"><a href="/"><img src="assets/img/logo/logo.png" alt=""/></a>*/}
            {/*               </div>*/}
            {/*               <div className="footer-text"><p>Gemas marketplace the relase etras thats sheets continig*/}
            {/*                  passag.</p>*/}
            {/*                  <div className="footer-contact">*/}
            {/*                     <ul>*/}
            {/*                        <li><i className="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street*/}
            {/*                           lan West new queens*/}
            {/*                        </li>*/}
            {/*                        <li><i className="fas fa-headphones"></i> <span>Phone : </span>+24 1245 654 235</li>*/}
            {/*                        <li><i className="fas fa-envelope-open"></i><span>Email : </span>info@exemple.com</li>*/}
            {/*                     </ul>*/}
            {/*                  </div>*/}
            {/*               </div>*/}
            {/*            </div>*/}
            {/*         </Col>*/}
            {/*         <Col xl={2} lg={3} sm={6}>*/}
            {/*            <div className="footer-widget mb-50">*/}
            {/*               <div className="fw-title mb-35"><h5>Products</h5></div>*/}
            {/*               <div className="fw-link">*/}
            {/*                  <ul>*/}
            {/*                     <li><a href="/#">Graphics (26)</a></li>*/}
            {/*                     <li><a href="/#">Backgrounds (11)</a></li>*/}
            {/*                     <li><a href="/#">Fonts (9)</a></li>*/}
            {/*                     <li><a href="/#">Music (3)</a></li>*/}
            {/*                     <li><a href="/#">Photography (3)</a></li>*/}
            {/*                  </ul>*/}
            {/*               </div>*/}
            {/*            </div>*/}
            {/*         </Col>*/}
            {/*         <Col xl={2} lg={3} sm={6}>*/}
            {/*            <div className="footer-widget mb-50">*/}
            {/*               <div className="fw-title mb-35"><h5>Need Help?</h5></div>*/}
            {/*               <div className="fw-link">*/}
            {/*                  <ul>*/}
            {/*                     <li><a href="/#">Terms &amp; Conditions</a></li>*/}
            {/*                     <li><a href="/#">Privacy Policy</a></li>*/}
            {/*                     <li><a href="/#">Refund Policy</a></li>*/}
            {/*                     <li><a href="/#">Affiliate</a></li>*/}
            {/*                     <li><a href="/#">FAQUse Cases</a></li>*/}
            {/*                  </ul>*/}
            {/*               </div>*/}
            {/*            </div>*/}
            {/*         </Col>*/}
            {/*         <Col xl={3} lg={4} md={6}>*/}
            {/*            <div className="footer-widget mb-50">*/}
            {/*               <div className="fw-title mb-35"><h5>Follow us</h5></div>*/}
            {/*               <div className="footer-social">*/}
            {/*                  <ul>*/}
            {/*                     <li><a href="/#"><i className="fab fa-facebook-f"></i></a></li>*/}
            {/*                     <li><a href="/#"><i className="fab fa-twitter"></i></a></li>*/}
            {/*                     <li><a href="/#"><i className="fab fa-pinterest-p"></i></a></li>*/}
            {/*                     <li><a href="/#"><i className="fab fa-linkedin-in"></i></a></li>*/}
            {/*                  </ul>*/}
            {/*               </div>*/}
            {/*            </div>*/}
            {/*         </Col>*/}
            {/*      </Row>*/}
            {/*   </Container>*/}
            {/*</div>*/}
            <div className="footer__horizontal-line"></div>
            <div className="footer__copyright-wrap">
               <Container>
                  <div className="logo mb-20">
                     <NavLink to="/">
                        <div>
                           <h4>
                              <a href="/">공개SW 페스티벌 2023</a>
                           </h4>
                        </div>
                        {/*<img src="assets/img/logo/logo.png" alt="logo"/>*/}
                     </NavLink>
                  </div>
                  <div className="footer__horizontal-line d-md-none mt-10 mb-10"></div>
                  <Row md={2} className="d-flex">
                     <Col md={{span:6, order:2}} className="d-flex justify-content-start align-content-md-center flex-column justify-content-md-end">
                        <div className="justify-content-start">
                           <p className="d-flex flex-column justify-content-start  flex-sm-row flex-sm-wrap justify-content-md-end">
                              <div className="d-inline-block mb-10"><Link to={docUrl1} className="fw-bold">이용약관</Link></div><span className="d-none d-sm-inline">&nbsp;|&nbsp;</span>
                              <div className="d-inline-block mb-10"><Link to={docUrl2} className="fw-bold">개인정보취급방침</Link></div><span className="d-none d-sm-inline">&nbsp;|&nbsp;</span>
                              <div className="d-inline-block mb-10"><Link to={docUrl3} className="fw-bold">이메일주소 무단수집 거부</Link></div>
                           </p>
                        </div>
                        <div className="d-flex justify-content-md-end">
                           <a href='https://www.youtube.com/playlist?list=PL8MaVgZDhGk_6lUMRnoGQO8Xy4d3RXTDa' className="mr-10"><img src="assets/img/brand/youtubeIcon.png" className="icon"/></a>
                           <a href="https://www.facebook.com/OpenUP_OSS"><img src="assets/img/brand/facebook.png" className="icon"/></a>
                        </div>
                     </Col>
                     <div className="footer__horizontal-line d-md-none mt-10 mb-10"></div>
                     <Col md={{span:6, order:1}} className="d-flex align-items-md-end">
                        <div className="copyright-text">
                           <p>Copyright © <a href="/#">NIPA.</a> All Rights Reserved.</p>
                           <p>Contact: <a className="underline__black" href="mailto:ossfesta2023@gmail.com">ossfesta2023@gmail.com</a></p>
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