import React from 'react'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import FooterSec from './FooterSec';

const NEWS = () => {
  return (
    <>
    <section className="breadcrumb-area secNew" >
            <Container>
                <div className="breadcrumb__wrapper">
                    <Row >
                        <Col className="col-12">
                            <div className="breadcrumb__content">
                                <h2 className="title">blog standard</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item now"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">blog list</li>
                                    </ol>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
    </section>

    <section className="blog-area">
        <div className="container">
            <div className="row justify-content-center">
                <div className="blog-post-wrapper">
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="#"><img src="imgs/blog_post01.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 19, 2023</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="#">zombie land TOURNAMENT max</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="#">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="#"><img src="imgs/blog_post02.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 16, 2023</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="#">play to earn crypto games place</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="#">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-post-item">
                            <div className="blog-post-thumb">
                                <a href="#"><img src="/imgs/blog_post03.jpg" alt="img"/></a>
                            </div>
                            <div className="blog-post-content">
                                <div className="blog-post-meta">
                                    <ul className="list-wrap">
                                        <li>By<a href="#">Admin</a></li>
                                        <li><i className="far fa-calendar-alt"></i> Aug 16, 2023</li>
                                        <li><i className="far fa-comments"></i><a href="#">No comments</a></li>
                                    </ul>
                                </div>
                                <h2 className="title"><a href="#">nft games android no investment</a></h2>
                                <p>Lorem ipsum dolor sit amet, consteur adipiscing Duis elementum solliciin is yaugue euismods Nulla ullaorper. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                                <div className="blog-post-bottom">
                                    <div className="blog-post-read">
                                        <a href="#">READ MORE <i className="fas fa-arrow-right"></i></a>
                                    </div>
                                    <div className="blog-post-share">
                                        <h5 className="share">share :</h5>
                                        <ul className="list-wrap">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pagination__wrap">
                            <ul className="list-wrap d-flex flex-wrap justify-content-center">
                                <li className='endnum' ><a href="#" className="page-numbers">01</a></li>
                                <li className='endnum'><span className="page-numbers current">02</span></li>
                                <li className='endnum'><a href="#" className="page-numbers">03</a></li>
                                <li className='endnum'><a href="#" className="page-numbers">04</a></li>
                                <li className='endnum'><a href="#" className="page-numbers">....</a></li>
                                <li className='endnum'>
                                    <a href="#" className="next page-numbers">
                                        <i className="fas fa-angle-double-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>
                <div className="blog-post-sidebar">
                    <aside className="blog-sidebar">
                            <div className="blog-widget">
                                <div className="sidebar__author">
                                    <div className="sidebar__author-thumb">
                                        <img src="imgs/avatar.jpg" alt="img"/>
                                    </div>
                                    <div className="sidebar__author-content">
                                        <h4 className="name">Kaceytron G.</h4>
                                        <p>Lorem ipsum sitamet conteur adipiscing Duis elementum solliciin</p>
                                        <div className="sidebar__author-social">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <form className="sidebar-search-form position-relative">
                                    <input type="text" placeholder="Search here.."/>
                                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </div>
                            <div className="blog-widget widget_categories">
                                <h4 className="fw-title">CATEGORIES</h4>
                                <ul className="list-wrap">
                                    <li><a href="#">gaming</a><span className="float-right">(11)</span></li>
                                    <li><a href="#">ELECTRONIC</a><span className="float-right">(4)</span></li>
                                    <li><a href="#">online</a><span className="float-right">(21)</span></li>
                                    <li><a href="#">TOURNAMENT</a><span className="float-right">(15)</span></li>
                                    <li><a href="#">controller</a><span className="float-right">(2)</span></li>
                                    <li><a href="#">live</a><span className="float-right">(7)</span></li>
                                </ul>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Recent Posts</h4>
                                <div className="rc__post-wrapper">
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="#"><img src="/imgs/rc_post01.jpg" alt="img"/></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="#">zombie TOURNAMENT
                                            land max</a></h6>
                                            <span className="date">aug 19, 2023</span>
                                        </div>
                                    </div>
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="#"><img src="/imgs/rc_post02.jpg" alt="img"/></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="#">play to earn crypto games</a></h6>
                                            <span className="date">aug 19, 2023</span>
                                        </div>
                                    </div>
                                    <div className="rc__post-item">
                                        <div className="rc__post-thumb">
                                            <a href="#"><img src="/imgs/rc_post03.jpg" alt="img"/></a>
                                        </div>
                                        <div className="rc__post-content">
                                            <h6 className="title"><a href="#">nft games android
                                            land max</a></h6>
                                            <span className="date">aug 19, 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Newsletter</h4>
                                <div className="sidebar__newsletter">
                                    <p>Lorem ipsum sitamet conteur adipiscin</p>
                                    <form action="#" className="sidebar__newsletter-form">
                                        <input type="email" name="email" placeholder="Enter Your Email"/>
                                        <button type="submit"><i class="fas fa-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">INSTAGRAM</h4>
                                <div className="sidebar__insta">
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta01.jpg" alt="img"/></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta02.jpg" alt="img"/></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta03.jpg" alt="img"/></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta04.jpg" alt="img"/></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta05.jpg" alt="img"/></a>
                                    </div>
                                    <div className="sidebar__insta-item">
                                        <a href="https://www.instagram.com/" target="_blank"><img src="/imgs/insta06.jpg" alt="img"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-widget">
                                <h4 className="fw-title">Tag Cloud</h4>
                                <div className="tagcloud">
                                    <a href="#">E-sports</a>
                                    <a href="#">Fantasy</a>
                                    <a href="#">game</a>
                                    <a href="#">Tournaments</a>
                                    <a href="#">Matches</a>
                                    <a href="#">Streamers</a>
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

export default NEWS
