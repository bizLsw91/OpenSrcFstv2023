import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";

const HomeKeyVisual = () => {
   // slider data
   const homeSliderData = [
      {
         id:1,
         bgImg:'home_slider_1'
      },
      {
         id: 2,
         bgImg:'home_slider_2',
      },
   ]
   // slick setting
   const settings = {
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 500,
      infinite: true,
      dots: false,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
   };

   return (
      <>
         <section className="slider__area">
               <Slider className='slider-active' {...settings}>
                {
                  homeSliderData.map((slider,index) => {
                     return<div key={index}
                                 className={`single-slider slider__height d-flex align-items-center ${slider.bgImg}`}>
                        {/*<div className="slider__shape">*/}
                        {/*   <img className="shape triangle" src="assets/img/icon/slider/triangle.png" alt="triangle"/>*/}
                        {/*   <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png"*/}
                        {/*        alt="dotted-square"/>*/}
                        {/*   <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png"*/}
                        {/*        alt="solid-square"/>*/}
                        {/*   <img className="shape circle" src="assets/img/icon/slider/circle.png" alt="circle"/>*/}
                        {/*</div>*/}
                        <Container className="h1_slider_wrapper">
                           <Row>
                              <Col xl="12">
                                 <div className="slider__content-5">
                                    <img src="assets/img/banner/keyvisual_desktop_text.png" alt=""/>
                                    <div className="slider__btn">
                                       <Link to="/preRegistration" className="z-btn-main z-btn-transparent">사전신청</Link>
                                    </div>
                                 </div>
                              </Col>
                           </Row>
                        </Container>
                     </div>;
                  })
                }
               </Slider>
         </section>
      </>
   );
};

export default HomeKeyVisual;