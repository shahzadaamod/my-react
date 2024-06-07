// TestComponent.js
import React from 'react';

const TestComponent = ({ imageUrl, title, link, tabIndex }) => {
  return (
    <div className="views-row">
      <img alt="Avasant Recognition" src={imageUrl} loading="lazy" />
      <div className="banner-content">
        <div className="container">
          <h1>{title}</h1>
          <p className="blogs-text" multi-analyst="" partner="" recognized="" sap=""> </p>
          {/* Change tabindex to tabIndex */}
          <p><a className="site-btn blue" href={link} tabIndex={tabIndex}>Read More</a></p>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
