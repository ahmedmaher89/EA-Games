import React from 'react'
import { Navbar , Container , ContainerFluid , Col , Row ,Image } from "react-bootstrap";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow' ;


import { Autoplay, Pagination, Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

const AboutSec = () => {
  return (
    <div>
    <section className='about__area section-pt-130 section-pb-130' >
    <div class="row justify-content-center p-5" data-aos="fade-up">
      <Col xl={6} lg={7} md={10}>
        <div className="section__title text-center mb-60 p-5" >
          <span className="sub-title ">KNOW ABOUT US</span>
          <h3 className="title">top rated steamers</h3>
        </div>
      </Col>
      
    </div>
    <div className='about__tab-wrap' data-aos="fade-up">
    <div className="about__buttons">
      <a href="#" class="tg-btn-2">buy Hero</a>
      <a href="#" class="tg-btn-2 - secondary">buy nfts</a>
    </div>
    <ul class="nav midcon midh justify-content-center position-relative" >
      <li className="nav-item px-3 active">
        <img src="/imgs/about_tab01.png" alt="img"/>
      </li>
      <li className="nav-item px-3">
        <img src="/imgs/about_tab02.png" alt="img"/>
      </li>
      <li className="nav-item px-3">
        <img src="/imgs/about_tab03.png" alt="img"/>
      </li>
      <li className="nav-item px-3">
        <img src="/imgs/about_tab04.png" alt="img"/>
      </li>
      <li className="nav-item px-3">
        <img src="/imgs/about_tab05.png" alt="img"/>
      </li>
      <li className="nav-item px-3">
        <img src="/imgs/about_tab06.png" alt="img"/>
      </li>
    </ul>
    </div>

    <div className="tab-content " id="myTabContent" data-aos="fade-up-right">
      <div classN="tab-pane show active" id="about01" role="tabpanel" aria-labelledby="about01-tab">
      <div className="row justify-content-center">
        <Col xl={5} lg={10}>
          <div className="about__img">
            <img src="/imgs/about_img01.jpg" alt="img"/>
          </div>
        </Col>
        <Col xl={7} lg={10}>
          <div className="about__flex-wrap">
            <div className="about__content-wrap">
              <div className="about__content">
                <h4 className="title">human game</h4>
                <span className="rate">rate 50%</span>
                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum sollicitudin is yaugue euismods Nulla ullamcorper. Morbi pharetra tellus miolslis, tincidunt massa venenatis.</p>
              </div>
                <div className="about__content-list">
                  <ul className="list-wrap">
                    <li><img src="/imgs/features_icon01.png" alt="img"/> Chichi Dragon Ball</li>
                    <li><img src="/imgs/features_icon02.png" alt="img"/> Space Babe Night</li>
                    <li><img src="/imgs/features_icon03.png" alt="img"/> Dragon Ball</li>
                  </ul>
                </div>
            </div>
            <div className="about__btn-wrap">
              <ul className="list-wrap2">
                <li>Dragon Ball</li>
                <li>nft market</li>
                <li>support</li>
              </ul>
            </div>
          </div>
        </Col>
      </div>
      </div>
    </div>
    <Swiper
        data-aos="fade-up"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='sweper'>
          <img className='img' src="/imgs/gallery01.jpg"  />
          <br />
          <div>
          <h3>pubg tournament</h3>
          <p>rate 65%</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='sweper'>
          <img className='img' src="/imgs/gallery02.jpg"  />
          <br />
          <div>
          <h3>Assassin's Creed</h3>
          <p>rate 65%</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='sweper'>
          <img className='img' src="/imgs/gallery03.jpg"  />
          <br />
          <div>
          <h3>World of Warcraft</h3>
          <p>rate 60%</p>
          </div>
          </SwiperSlide>
        <SwiperSlide className='sweper'>
          <img className='img' src="/imgs/gallery04.jpg"  />
          <br />
          <div>
          <h3>The Chant s.2</h3>
          <p>rate 70%</p>
          </div>
          </SwiperSlide>
    </Swiper>
    </section>
    </div>
  )
}

export default AboutSec
