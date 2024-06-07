import React, { useState } from 'react';
import ProductAccordionItem from './ProductAccordionItem';

const ProductAccordion = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleAccordion = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  const handleItemClick = (idx) => {
    const image = document.querySelector('.accordion-images img');
    if (image) {
      image.src = items[idx].content.imageSrc;
    }
  };

  return (
    <>
      <div className="accordion-text">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`accordion ${activeIdx === idx ? 'active' : ''}`}
            onClick={() => {
              toggleAccordion(idx);
              handleItemClick(idx); // Call handleItemClick when an accordion item is clicked
            }}
          >
            {item.title}
          </div>
        ))}
      </div>
      
    
     
    </>
  );
};

export default ProductAccordion;
