import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import FooterSec from './FooterSec';

const TOURNAMENT = () => {
  return (
    <>
    <section className="breadcrumb-area tourbread" >
      <Container>
        <div className="breadcrumb__wrapper">
          <Row>
            <Col xl={6} lg={7}>
              <div className="breadcrumb__content" >
                <h2 className="title">TOURNAMENT</h2>
                <Breadcrumb data-aos="fade-right">
                  <Breadcrumb.Item className='Homcolor' href="#">Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>TOURNAMENT</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </Col>
            <Col xl={6} lg={5} className="position-relative d-none d-lg-block" >
              <div className="breadcrumb__img">
                <img src="/imgs/breadcrumb_img03.png" alt="img" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>

    <section class="tournament__details-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="blog-post-wrapper">
                        <div class="tournament__details-content">
                            <h2 class="title">zombie land TOURNAMENT max</h2>
                            <div class="blog-post-meta">
                                <ul class="list-wrap" data-aos="fade-right">
                                    <li>By<a href="#">Admin</a></li>
                                    <li ><i class="far fa-calendar-alt"></i> Aug 16, 2023</li>
                                    <li><i class="far fa-comments"></i><a href="#">No comments</a></li>
                                </ul>
                            </div>
                            <p>Excepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum solliciin. Duis aute irure dolor in repderit in voluptate velit esse cillum dolorliq commodo consequat.</p>
                        <div>
                            <i class="fa-solid fa-play ico" style={{color: "#5bf994"}}></i>
                            <blockquote>
                                <p>Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing and typeetting industry.</p>
                            </blockquote>
                        </div>
                            <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of  printing and typeetting industry. Lorem Ipsum has been the industry's standsaard sipiscing Duis elementum.</p>
                            <div class="tournament__details-video position-relative">
                                <img src="/imgs/blog_post03.jpg" alt="img"/>
                                <a href="https://www.youtube.com/watch?v=_SAlU-hu8M0" class="popup-video"><i class="flaticon-play"></i></a>
                            </div>
                            <p>Axcepteur sint occaecat atat non proident, sunt in culpa qui officia deserunt mollit anim id est labor umLor em ipsum dolor amet, consteur adiscing Duis elentum solliciin is yaugue euismods Nulla ullaorper. Ipsum is simply dummy text of printing.</p>
                            <div class="tournament__details-form">
                                <h4 class="tournament__details-form-title">join nft games android</h4>
                                <p>Simply dummy text of printing and typeetting industry been the industry's</p>
                                <form action="#">
                                    <input type="text" placeholder="Name *"/>
                                    <input type="text" placeholder="Player ID *" required=""/>
                                    <input type="email" placeholder="Email *" required=""/>
                                    <button class="tournament__details-form-btn">Join Now</button>
                                </form>
                            </div>
                            <div class="blog-details-bottom">
                                <div class="row">
                                    <Col xl={6} md={7}>
                                        <div class="tg-post-tags">
                                            <h5 class="tags-title">tags :</h5>
                                            <ul class="list-wrap d-flex flex-wrap align-items-center m-0">
                                                <li><a href="#">Esports</a>,</li>
                                                <li><a href="#">Fantasy</a>,</li>
                                                <li><a href="#">game</a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xl={6} md={5}>
                                        <div class="blog-post-share justify-content-start justify-content-md-end">
                                            <h5 class="share">share :</h5>
                                            <ul class="list-wrap">
                                                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-post-sidebar">
                        <aside class="blog-sidebar tournament__sidebar">
                            <div class="shop__widget">
                                <h4 class="shop__widget-title">search</h4>
                                <div class="shop__widget-inner">
                                    <div class="shop__search">
                                        <input type="text" placeholder="Search here"/>
                                        <button class="p-0 border-0"><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="shop__widget">
                                <h4 class="shop__widget-title">TRENDING MATCHES</h4>
                                <div class="shop__widget-inner">
                                    <div class="trending__matches-list">
                                        <div class="trending__matches-item">
                                            <div class="trending__matches-thumb">
                                                <a href="#"><img src="imgs/trend_match01.png" alt="img"/></a>
                                            </div>
                                            <div class="trending__matches-content">
                                                <div class="info">
                                                    <h5 class="title"><a href="#">FoxTie Max</a></h5>
                                                    <span class="price">$ 7500</span>
                                                </div>
                                                <div class="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" class="popup-video"><i class="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="trending__matches-item">
                                            <div class="trending__matches-thumb">
                                                <a href="#"><img src="imgs/trend_match02.png" alt="img"/></a>
                                            </div>
                                            <div class="trending__matches-content">
                                                <div class="info">
                                                    <h5 class="title"><a href="#">hatax ninja</a></h5>
                                                    <span class="price">$ 5500</span>
                                                </div>
                                                <div class="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" class="popup-video"><i class="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="trending__matches-item">
                                            <div class="trending__matches-thumb">
                                                <a href="#"><img src="imgs/trend_match03.png" alt="img"/></a>
                                            </div>
                                            <div class="trending__matches-content">
                                                <div class="info">
                                                    <h5 class="title"><a href="#">spartan ii</a></h5>
                                                    <span class="price">$ 3500</span>
                                                </div>
                                                <div class="play">
                                                    <a href="https://www.youtube.com/watch?v=a3_o4SpV1vI" class="popup-video"><i class="far fa-play-circle"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="shop__widget">
                                <h4 class="shop__widget-title">ADVERTISEMENT</h4>
                                <div class="shop__widget-inner">
                                    <div class="tournament__advertisement">
                                        <a href="#"><img src="imgs/tournament_ad.jpg" alt="img"/></a>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
    </section>
    
    <FooterSec/>
    </>
  )
}

export default TOURNAMENT
