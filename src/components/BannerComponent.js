// BannerComponent.js
import React from 'react';

const BannerComponent = ({ data }) => {
  return (
    <div className="views-row slideFirstShow">
      <img alt={data.title} src={data.imageUrl} />
      <div className="banner-content">
        <div className="container">
          <h1>{data.title}</h1>
          <p className="blogs-text" multi-analyst="" partner="" recognized="" sap=""></p>
          <p><a className="site-btn blue" href={data.link} tabIndex="0">Read More</a></p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
