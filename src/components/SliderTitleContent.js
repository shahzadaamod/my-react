import React from 'react';
import SliderTitleItem from './SliderTitleItem'; // Import the TitleItem component

const SliderTitleContent = () => {
  // Array of titles
  const titles = [
    'Emerging Leader',
    'Acclaimed Provider',
    'Globally Awarded',
    'AI & ML Pioneer',
    'Infinite Possibilities'
  ];

  return (
    <div className="slider-title-content">
      <div className="container">
        <div className="slider-nav slick-slider">
          {titles.map((title, index) => (
            <SliderTitleItem key={index} title={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderTitleContent;
