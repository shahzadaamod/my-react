// SliderTitleComponent.js
import React from 'react';

const SliderTitleComponent = ({ data }) => {
  return (
    <div className="slider-title-content">
      <div className="container">
        <div className="slider-nav slick-slider">
          {/* Render dynamic data for slider titles */}
          {data.map((title, index) => (
            <div className="views-row" key={index}>
              <div className="views-field">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTitleComponent;
