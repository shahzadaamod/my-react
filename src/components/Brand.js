// components/Brand.js
import React from 'react';

const Brand = ({ src, width, height, alt }) => {
  return (
    <div className="views-row">
      <div className="views-field views-field-field-image">
        <div className="field-content">
          <img loading="lazy" src={src} width={width} height={height} alt={alt} typeof="foaf:Image" />
        </div>
      </div>
    </div>
  );
};

export default Brand;
