import React,{  useState, useRef} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import FooterSec from './FooterSec';

// Email.js 
import emailjs from '@emailjs/browser';

const CONTACT = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_02o249q', 'template_bhcpyry', form.current, '6he172vfg-0p_fTcm')
        .then((result) => {
            alert('Thank you, the message has been sent')
        }, (error) => {
            console.log(error.text);
        });
    };
    
  return (
    <>
    <section className="breadcrumb-area secNew" >
            <Container>
                <div className="breadcrumb__wrapper">
                    <Row >
                        <Col className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">Contact us</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item now"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">contact</li>
                                    </ol>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
    </section>

    <section class="contact-area">
            <div class="container">
                <div class="row justify-content-center padcon">
                    <Col lg={6} md={10}>
                        <div class="contact__content">
                            <h2 class="overlay-title"><span>join us</span></h2>
                            <h2 class="title">CONTACT US AND FIND YOUR mykd</h2>
                            <p>Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor</p>
                            <div class="footer-el-widget">
                                <h4 class="title">
                                <i class="fa-solid fa-play" style={{color: "#5bf994"}}></i>
                                  information</h4>
                                <ul class="list-wrap">
                                    <li><a href="tel:123">+971 333 222 557</a></li>
                                    <li><a href="mailto:info@exemple.com">info@exemple.com</a></li>
                                    <li>New Central Park W7 Street, New York</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={10}>
                        <div class="contact__form-wrap">
                            <form id="contact-form" ref={form} onSubmit={sendEmail} method="POST">
                                <div class="row">
                                    <Col sm={6}>
                                        <div class="input-grp">
                                            <input name="name" type="text" placeholder="Name *" required=""/>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div class="input-grp">
                                            <input name="email" type="email" placeholder="Email *" required=""/>
                                        </div>
                                    </Col>
                                </div>
                                <div class="input-grp message-grp">
                                    <textarea name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
                                </div>
                                <button class="submit-btn">Submit Now</button>
                            </form>
                            <p class="ajax-response"></p>
                        </div>
                    </Col>
                </div>
            </div>
    </section>

    <div class="contact-map">
        <iframe src="https://geo-devrel-javascript-samples.web.app/samples/style-array/app/dist/" allowfullscreen="" loading="lazy"></iframe>
    </div>
    <FooterSec/>
    </>
  )
}

export default CONTACT
