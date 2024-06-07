import React from 'react';

const Banner = ({ imageSrc, altText, title, description, buttonText, buttonLink }) => {
  return (
    <div className="views-row">
      <img src={imageSrc} alt={altText} loading="lazy" />
      <div className="banner-content">
        <div className="container">
          <h1>{title}</h1>
          <p className="blogs-text">{description}</p>
          <p><a className="site-btn blue" href={buttonLink} tabIndex="0">{buttonText}</a></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;