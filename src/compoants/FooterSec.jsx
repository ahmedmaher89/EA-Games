import React from 'react'
import {  Col  } from "react-bootstrap";


const FooterSec = () => {
  return (
    <div>
      <footer className="footer-style-one">
      <div className="footer__top-wrap" >
        <div className="container">
          <div className="row" >
            <Col xl={4} lg={5} md={7}>
              <div className="footer-widget">
                <div className="footer-logo logo">
                  <a href="#"><img src="/imgs/logo.png" alt="Logo" /></a>
                </div>

                <div className="footer-text">
                  <p className="desc">Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin augue euismod. Nulla ullam dolor sitamet consectetur</p>
                  <p className="social-title">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <a href="#"><img src="/imgs/social_icon01.png" alt="iocn" /></a>
                    <a href="#"><img src="imgs/social_icon02.png" alt="iocn" /></a>
                    <a href="#"><img src="imgs/social_icon03.png" alt="iocn" /></a>
                    <a href="#"><img src="imgs/social_icon04.png" alt="iocn" /></a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={2} lg={3} md={5} sm={6}>
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">quick link</h4>
                <ul className="list-wrap menu">
                  <li><a href="#">Gaming</a></li>
                  <li><a href="#">Product</a></li>
                  <li><a href="#">All NFTs</a></li>
                  <li><a href="#">Social Network</a></li>
                  <li><a href="#">Domain Names</a></li>
                  <li><a href="#">Collectibles</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={2} lg={3} md={5} sm={6}>
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title">Supports</h4>
                <ul className="list-wrap menu">
                  <li><a href="#">Setting &amp; Privacy</a></li>
                  <li><a href="#">Help &amp; Support</a></li>
                  <li><a href="#">Live Auctions</a></li>
                  <li><a href="#">Item Details</a></li>
                  <li><a href="#">24/7 Supports</a></li>
                  <li><a href="#">Our News</a></li>
                </ul>
              </div>
            </Col>
            <Col xl={4} lg={5} md={7}>
              <div className="footer-widget">
                <h4 className="fw-title">Newsletter</h4>
                <div className="footer-newsletter">
                  <p>Subscribe our newsletter to get our latest update &amp; newsconsectetur</p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit"> <i class="fa-solid fa-play"></i></button>
                  </form>
                </div>
              </div>
            </Col>
          </div>
        </div>
      </div>
      <div className="copyright__wrap">
        <div className="container">
          <div className="row ">
            <Col md={7}>
              <div className="copyright__text">
                <p>Copyright © 2023 - All Rights Reserved By <span>AHMED_Maher</span></p>
              </div>
            </Col>
            <Col md={5}>
              <div className="copyright__card text-center text-md-end">
                <img src="imgs/payment_card.png" alt="img" />
              </div>
            </Col>
          </div>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default FooterSec
