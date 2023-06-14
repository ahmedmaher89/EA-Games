import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import ServArea from './ServArea';
import VideoSec from './VideoSec';
import RoadMapSec from './RoadMapSec';
import FooterSec from './FooterSec';

const SERVICES = () => {
  return (
    <>
    
    <section className="breadcrumb-area" >
      <Container>
        <div className="breadcrumb__wrapper">
          <Row>
            <Col xl={6} lg={7}>
              <div className="breadcrumb__content" data-aos="fade-right">
                <h2 className="title">SERVICES</h2>
                <Breadcrumb>
                  <Breadcrumb.Item className='Homcolor' href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>Our Services</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col xl={6} lg={5} className="position-relative d-none d-lg-block" data-aos="fade-left">
              <div className="breadcrumb__img">
                <img src="/imgs/breadcrumb_img02.png" alt="img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    <ServArea/>
    <VideoSec/>
    <RoadMapSec/>
    <FooterSec/>
    </>
  )
}

export default SERVICES
