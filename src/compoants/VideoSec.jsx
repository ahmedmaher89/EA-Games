import React from 'react'
import {  Col  } from "react-bootstrap";


const VideoSec = () => {
  return (
    <div>
      <section className="video__area video-bg tg-jarallax">
      <div className="container">
        <div className="row justify-content-center"  data-aos="fade-up-left">
          <Col xl={6} lg={8} md={11}>
            <div className="video__content text-center">
            <div class="loader1">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
              <h2 className="title">JOIN THE <span>COMMUNITY</span></h2>
              <p>Join our Discord community and choosec onsteur</p>
              
            <button className='bttn2 bttnmid'>
            join discord
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
          </Col>
        </div>
      </div>
      <div id="jarallax-container-0">
        <div >
        </div>
      </div>
    </section>
    </div>
  )
}

export default VideoSec
