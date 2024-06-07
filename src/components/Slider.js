// Slider.js
import React from 'react';
import Banner from './Banner';
import SliderNav from './SliderNav';

const Slider = ({ banners, titles }) => {
  return (
    <div className="inner-banner">
      <div className="slideWrap">
        {banners.map((banner, index) => (
          <Banner key={index} {...banner} />
        ))}
      </div>
      <div className="slick-slider slide-show">
        {banners.map((banner, index) => (
          <div className="views-row" key={index}>
            <img src={banner.imageSrc} alt={banner.altText} loading="lazy" />
            <div className="banner-content">
              <div className="container">
                <h1>{banner.title}</h1>
                <p className="blogs-text">{banner.description}</p>
                <p><a className="site-btn blue" href={banner.buttonLink} tabIndex="0">{banner.buttonText}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SliderNav titles={titles} />
    </div>
  );
};

export default Slider;
