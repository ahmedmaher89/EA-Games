import React from 'react'
import { Container  , Col , Row ,Image } from "react-bootstrap";


const RoadMapSec = () => {
  return (
    <div>
      <section className="roadMap__area roadMap-bg section-pt-150 section-pb-150">
      <Container>
        <Row className="justify-content-center roadcon">
          <Col xl={10}>
            <div className="roadMap__inner">
              <Row>
                <Col xl={5} lg={6}>
                  <div className="roadMap__content" data-aos="fade-up-right">
                    <h2 className="title">a look into roadmaps seasons</h2>
                    <p>With Season 1 Ending with our play and Duis elementum sollicitudin is yaugue euismods Nulla ulla Player-focused updates games from Mobile App and Enjoy.</p>
                    <button className='bttn3 '>
                      ROADMAP
                        <div id="clip">
                            <div id="leftTop" class="corner"></div>
                            <div id="rightBottom" class="corner"></div>
                            <div id="rightTop" class="corner"></div>
                            <div id="leftBottom" class="corner"></div>
                        </div>
                        <span id="rightArrow" class="arrow"></span>
                        <span id="leftArrow" class="arrow"></span>
                    </button>
                  </div>
                  <div className="roadMap__img">
                    <Image src="/imgs/roadmap.png" fluid />
                  </div>
                </Col>
                <Col xl={7} lg={6}>
                  <div className="roadMap__steps-wrap">
                    <div className="roadMap__steps-item active" data-aos="fade-up-left">
                      <h3 className="title">season 1</h3>
                      <ul className="roadMap__list list-wrap">
                        <li className="active tg__animate-text style2 ready stop">Battle PraticeMode</li>
                        <li className="active tg__animate-text style2 ready stop">Android Moile</li>
                        <li className="active tg__animate-text style2 ready stop">iOS Open Bta</li>
                        <li className="active tg__animate-text style2 ready stop">Land Creaton &amp;Builing</li>
                      </ul>
                      <Image src="/imgs/roadmap_img.png" alt="img" className="roadMap__steps-img" fluid />
                    </div>
                    <div className="roadMap__steps-item" data-aos="fade-up-left">
                      <h3 className="title">season 2</h3>
                      <ul className="roadMap__list list-wrap">
                        <li className="active tg__animate-text style2 ready stop">Land Creaton &amp;Builing</li>
                        <li className="active tg__animate-text style2 ready stop">Android Moile</li>
                        <li className="tg__animate-text style2 ready stop">iOS Open Bta</li>
                        <li className="tg__animate-text style2 ready stop">Land Creaton &amp;Builing</li>
                      </ul>
                      <Image src="/imgs/roadmap_img.png" alt="img" className="roadMap__steps-img" fluid />
                    </div>
                    <div className="roadMap__steps-item" data-aos="fade-up-left">
                      <h3 className="title">season 3</h3>
                      <ul className="roadMap__list list-wrap">
                        <li className="tg__animate-text style2 ready stop">Switch to D gaepla</li>
                        <li className="tg__animate-text style2 ready stop">Android Moile</li>
                        <li className="tg__animate-text style2 ready stop">iOS Open Bta</li>
                        <li className="tg__animate-text style2 ready stop">Land Creaton &amp;Builing</li>
                      </ul>
                      <Image src="/imgs/roadmap_img.png" alt="img" className="roadMap__steps-img" fluid />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default RoadMapSec
