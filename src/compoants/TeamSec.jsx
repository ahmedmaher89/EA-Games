import React from 'react'
import { Navbar , Container , ContainerFluid , Col , Row ,Image } from "react-bootstrap";


const TeamSec = () => {
  return (
    <div>
      <section className="team__area team-bg section-pt-130 section-pb-100" style={{backgroundImage: "url('/imgs/team_bg.jpg')"}}>
      <Container>
        <Row className="justify-content-center">
          <Col xl={6} lg={7} md={10}>
            <div className="section__title text-center mb-60" data-aos="fade-right">
              <span className="sub-title tg__animate-text ready stop">
                our team meber
              </span>
              <h3 className="title">ACTIVE TEAM MEMBERS</h3>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xl={3} lg={4} sm={6} className="wow fadeInUp" data-wow-delay=".2s" data-aos="fade-right">
            <div className="team__item">
              
              <div className="team__thumb">
                <a href="#"><img src="imgs/team01.png" alt="img"/></a>
              </div>
              <div className="team__content">
                <h4 className="name"><a href="#">killer master</a></h4>
                <span className="designation">Blockchain Expert</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="wow fadeInUp" data-wow-delay=".4s" data-aos="fade-down">
            <div className="team__item">
              <div className="team__thumb">
                <a href="#"><img src="imgs/team02.png" alt="img"/></a>
              </div>
              <div className="team__content">
                <h4 className="name"><a href="#">tanu mark</a></h4>
                <span className="designation">Developer</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="wow fadeInUp" data-wow-delay=".6s" data-aos="fade-up">
            <div className="team__item">
              <div className="team__thumb">
                <a href="#"><img src="imgs/team03.png" alt="img"/></a>
              </div>
              <div className="team__content">
                <h4 className="name"><a href="#">Thompson Scot</a></h4>
                <span className="designation">Art Director</span>
              </div>
            </div>
          </Col>
          <Col xl={3} lg={4} sm={6} className="wow fadeInUp" data-wow-delay=".8s"data-aos="fade-left">
            <div className="team__item">
              <div className="team__thumb">
                <a href="#"><img src="imgs/team04.png" alt="img"/></a>
              </div>
              <div className="team__content">
                <h4 className="name"><a href="#">Shakh Danial</a></h4>
                <span className="designation">Crypto Advisor</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default TeamSec
