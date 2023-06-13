import React, { useRef, useState } from "react";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';


import TeamSec from "./TeamSec";
import FooterSec from "./FooterSec";
import ServArea from "./ServArea";

const ABOUTUS = () => {

  return (
    <>
    
    
    <section className="breadcrumb-area" >
      <Container>
        <div className="breadcrumb__wrapper">
          <Row>
            <Col xl={6} lg={7}>
              <div className="breadcrumb__content" >
                <h2 className="title">ABOUT US</h2>
                <Breadcrumb data-aos="fade-right">
                  <Breadcrumb.Item className='Homcolor' href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>ABOUT US</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col xl={6} lg={5} className="position-relative d-none d-lg-block" >
              <div className="breadcrumb__img">
                <img src="/imgs/breadcrumb_img01.png" alt="img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    

    <section className="about__area-three ">
      <div className="container">
        <div className="row" style={{paddingTop:"120px"}} >
          <Col xl={4} md={12} sm={12}>
            <div className="about__title-wrap">
              <h2 className="title">
                <i>WE ARE</i>
                <br />
                <span>developer</span><br />
                <i>ern nft</i><br />
                <i>gam<b>ing</b></i>
              </h2>
              <div className="about__content-circle">
                {/* <img src="/imgs/circle.svg" alt="img" /> */}
                <img src="/imgs/logo6.png" alt="img" />
              </div>
            </div>
          </Col>
          <Col xl={8} md={12} sm={12}>
            <div className="about__three-images" >
              <img src="/imgs/mask_img01.jpg" alt="img" className="left"/>
              <img src="/imgs/mask_img02.jpg" alt="img" className="right"/>
              <div className="about__dots" >
                <svg width="109" height="35" viewBox="0 0 109 35" fill="none" xmlns="http://www.w3.org/2000/svg"  data-aos="fade-down-left">
                  <path d="M9 0H0V7H9V0Z" fill="currentcolor"></path>
                  <path d="M24 0H15V7H24V0Z" fill="currentcolor"></path>
                  <path d="M38 0H29V7H38V0Z" fill="currentcolor"></path>
                  <path d="M53 0H44V7H53V0Z" fill="currentcolor"></path>
                  <path d="M67 0H58V7H67V0Z" fill="currentcolor"></path>
                  <path d="M80 0H71V7H80V0Z" fill="currentcolor"></path>
                  <path d="M9 14H0V21H9V14Z" fill="currentcolor"></path>
                  <path d="M24 14H15V21H24V14Z" fill="currentcolor"></path>
                  <path d="M38 14H29V21H38V14Z" fill="currentcolor"></path>
                  <path d="M53 14H44V21H53V14Z" fill="currentcolor"></path>
                  <path d="M67 14H58V21H67V14Z" fill="currentcolor"></path>
                  <path d="M80 14H71V21H80V14Z" fill="currentcolor"></path>
                  <path d="M95 14H86V21H95V14Z" fill="currentcolor"></path>
                  <path d="M109 14H100V21H109V14Z" fill="currentcolor"></path>
                  <path d="M9 28H0V35H9V28Z" fill="currentcolor"></path>
                  <path d="M24 28H15V35H24V28Z" fill="currentcolor"></path>
                  <path d="M38 28H29V35H38V28Z" fill="currentcolor"></path>
                  <path d="M53 28H44V35H53V28Z" fill="currentcolor"></path>
                  <path d="M67 28H58V35H67V28Z" fill="currentcolor"></path>
                  <path d="M80 28H71V35H80V28Z" fill="currentcolor"></path>
                  <path d="M95 28H86V35H95V28Z" fill="currentcolor"></path>
                  <path d="M109 28H100V35H109V28Z" fill="currentcolor"></path>
                </svg>
              </div>
            </div>
            <div class="about__three-paragraph">
                <p className='tg__animate-text style2 ready stop'  data-aos="fade-down-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt dolor iste laboriosam ipsum blanditiis tenetur molestiae, deleniti eos dicta reprehenderit explicabo autem vel architecto aut nihil sint sit ipsa maxime?
                </p>
              </div>
          </Col>
        </div>
      </div>
      <h2 className="big-title">online</h2>
    </section>
    
    <ServArea/>

    <TeamSec/>
    <FooterSec/>
    </>
  )
}

export default ABOUTUS
