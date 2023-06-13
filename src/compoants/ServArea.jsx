import React, { useRef, useState } from "react";
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";

const ServArea = () => {
    const [activeIndex, setActiveIndex] = useState(3); // set the index of the active item
    
    const services = [
    {
    icon: 'flaticon-diamond',
    title: 'Year Experience',
    description: 'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods',
    link: '#',
    icon: 'fa-solid fa-diamond'
    },
    {
    icon: 'flaticon-user-profile',
    title: 'Expert Teams',
    description: 'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods',
    link: '#',
    icon: 'fa-solid fa-user-gear'
    
    },
    {
    icon: 'flaticon-ethereum',
    title: 'Best NFT Game',
    description: 'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods',
    link: '#',
    icon: 'fa-brands fa-ethereum'
    },
    {
    icon: 'flaticon-settings-1',
    title: 'Worldwide Client',
    description: 'Lorem ipsum dolor sitamet const adipiscng Duis eletum sollicitudin is yaugue euismods',
    link: '#',
    icon: 'fa-solid fa-gear'
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    
    <section className="services-area services__bg-color">
      <div className="container">
        <div className="row align-items-end align-items-xl-start ">
          <Col lg={6} className="sectit"  >
            <div className="section__title2 text-start mb-65">
              <span className="sub-title tg__animate-text  ">
              POWERFUL SERVICES
              </span>
              <h3 className="title">Our Powerful Services Done on time</h3>
            </div>
            <div className="services__wrapper">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`services__item ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="services__icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href={service.link}>{service.title}</a>
                    </h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6}>
            <div className="services__images">
              <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
              
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper0"
          >
            <SwiperSlide  >
              <img src="/imgs/services_img01.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/services_img02.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/services_img03.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/imgs/services_img04.jpg" />
            </SwiperSlide>
              </Swiper>
            </div>
          </Col>
        </div>
      </div>
    </section>
  )
}

export default ServArea
