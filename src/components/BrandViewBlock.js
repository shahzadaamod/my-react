import React from 'react';

const BrandViewBlock = ({ item }) => {
  return (
   
    
              <div className="views-row">
                <div className="views-field views-field-field-image">
                  <div className="field-content">
                    <img
                      loading="lazy"
                      src={item.imageSrc}
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                      typeof="foaf:Image"
                    />
                  </div>
                </div>
          
            </div>
        
  );
};

export default BrandViewBlock;
