import React from 'react'
import {  Col  } from "react-bootstrap";

const TrendingSec = () => {
  return (
    <div>
      <section className="trendingNft-area section-pt-120 section-pb-90">
      <div className="container">
        <div className="trendingNft__title-wrap">
          <div className="row">
            <Col md={7}>
              <div className="trendingNft__title">
                <h2 className="title md-center">top Trending <img src="/imgs/fire.png"  alt="icon"/></h2>
              </div>
            </Col>
          </div>
        </div>
        <div className="swiper-container  ">
          <div className="swiper-wrapper0"  >
            <div   className="swiper-slide00" data-aos="flip-left" >
              <div className="trendingNft__item">
                <div className="trendingNft__item-top">
                  <div className="trendingNft__item-avatar">
                    <div className="image">
                      <a href="#"><img src="/imgs/nft_avatar03.png" alt="img" /></a>
                    </div>
                    <div className="info">
                      <h6 className="name">Black Crypto</h6>
                      <a href="#" className="userName">@Jon Max</a>
                    </div>
                  </div>
                  <div className="trendingNft__item-wish">
                    <a href="#"><i className="far fa-heart"></i></a>
                  </div>
                </div>
                <div className="trendingNft__item-image">
                  <a href="#"><img src="imgs/nft_img06.jpg" alt="img" /></a>
                </div>
                <div className="trendingNft__item-bottom">
                  <div className="trendingNft__item-price">
                    <span className="bid">Last Bid</span>
                    <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                  </div>
                  <a href="#" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
            <div   className="swiper-slide00" data-aos="flip-left">
              <div className="trendingNft__item">
                <div className="trendingNft__item-top">
                  <div className="trendingNft__item-avatar">
                    <div className="image">
                      <a href="#"><img src="imgs/nft_avatar02.png" alt="img" /></a>
                    </div>
                    <div className="info">
                      <h6 className="name">Luck Crypto</h6>
                      <a href="#" className="userName">@Jon Max</a>
                    </div>
                  </div>
                  <div className="trendingNft__item-wish">
                    <a href="#"><i className="far fa-heart"></i></a>
                  </div>
                </div>
                <div className="trendingNft__item-image">
                  <a href="#"><img src="imgs/nft_img07.jpg" alt="img" /></a>
                </div>
                <div className="trendingNft__item-bottom">
                  <div className="trendingNft__item-price">
                    <span className="bid">Last Bid</span>
                    <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                  </div>
                  <a href="#" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
            <div   className="swiper-slide00" data-aos="flip-left">
              <div className="trendingNft__item">
                <div className="trendingNft__item-top">
                  <div className="trendingNft__item-avatar">
                    <div className="image">
                      <a href="#"><img src="imgs/nft_avatar03.png" alt="img" /></a>
                    </div>
                    <div className="info">
                      <h6 className="name">King Crypto</h6>
                      <a href="#" className="userName">@Jon Max</a>
                    </div>
                  </div>
                  <div className="trendingNft__item-wish">
                    <a href="#"><i className="far fa-heart"></i></a>
                  </div>
                </div>
                <div className="trendingNft__item-image">
                  <a href="#"><img src="imgs/nft_img08.jpg" alt="img" /></a>
                </div>
                <div className="trendingNft__item-bottom">
                  <div className="trendingNft__item-price">
                    <span className="bid">Last Bid</span>
                    <h6 className="eth"><i className="fab fa-ethereum"></i> 1.005 <span>Eth</span></h6>
                  </div>
                  <a href="#" className="bid-btn">Bid <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TrendingSec
