// SliderNav.js
import React from 'react';

const SliderNav = ({ titles }) => {
  return (
    <div className="slider-title-content">
      <div className="container">
        <div className="slider-nav slick-slider">
          {titles.map((title, index) => (
            <div className="views-row" key={index}>
              <div className="views-field">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderNav;
