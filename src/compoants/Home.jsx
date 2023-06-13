import React, { useEffect , useRef, useState} from 'react';
import { Col  } from "react-bootstrap";
import PropTypes from 'prop-types';

// Aos library
import Aos from 'aos';
import 'aos/dist/aos.css'
import {motion} from 'framer-motion'

// componatas
import NtfSec from './NtfSec';
import AboutSec from './AboutSec';
import TeamSec from './TeamSec';
import VideoSec from './VideoSec';
import RoadMapSec from './RoadMapSec';
import TrendingSec from './TrendingSec';
import FooterSec from './FooterSec';



const Home = () => {
  useEffect(()=>{
    Aos.init()
  },[]);

  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  const[move, setMove] = useState(false)
  return (

    <>
    <section className='Headerimg container-fluid'>
      <div>
        <div className='row position-relative' data-aos="fade-right">
            <Col className='strem1' md={12} sm={12} lg={7} xl={6}>
              <h3>live Gaming</h3>            
              <h1>STEAMING</h1>
              <p>video games online</p>
            <button className='bttn2'>
            CONTACT US
              <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
              </div>
              <span id="rightArrow" class="arrow"></span>
              <span id="leftArrow" class="arrow"></span>
            </button>
            </Col>
            <Col className='strem2' md={12} sm={12} lg={5} xl={6}>
            <motion.div animate={{x: move ? 10 : 0}}
            transition={{ type:'spring' , bounce:1}}
            onClick={()=>{
              setMove(!move)
            }}
            >
            <img src="\imgs\slider_img01.png" alt="" />
            </motion.div>
            <motion.div animate={{rotate:[0, 10, 10, 0],x:[9, 70, 70, 0]}}
            transition={{repeat:5, duration:4 }}
            >
              <img className='shape' src="/imgs/slider_shape01.png" alt="" /> 
              <img className='shape2' src="/imgs/slider_shape02.png" alt="" /> 
            </motion.div>
            <motion.div animate={{rotate:[10, 0, 0, 10],x:[0, 50, 40, 50]}}>
              <img className='shape3' src="/imgs/slider_shape03.png" alt="" /> 
              <img className='shape4' src="/imgs/slider_shape04.png" alt="" /> 
            </motion.div>
            </Col>
        </div>
        <div >
          <img  className='svg1' src="\imgs\wave (1).png" alt="" />
        </div>
      </div>
    </section>
    <NtfSec/>
    <AboutSec/>
    <TeamSec/>
    <VideoSec/>
    <RoadMapSec/>
    <TrendingSec/>
    <FooterSec/>
    </>
  )
}

export default Home
