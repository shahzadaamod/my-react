import React from 'react';

const AccordionSection = ({ section, isActive, onClick, isFirst }) => {
  return (
    <div>
      <div className={`accordion ${isActive ? 'active' : ''}`} onClick={onClick}>
        {section.title}
      </div>
      <div className={`panel ${isActive ? 'visible' : ''}`}>
        <div className="acc-images desk-hide" >
          
        <img
  alt={section.imgAlt}
  height="587"
  loading="lazy"
  src={section.imgSrc}
  width="484"
  className={isFirst ? 'acc-image show' : 'acc-image'}
/>
 
        </div>
        {section.content.map((item, index) => (
          <a key={index} href={item.link}>{item.text}</a>
        ))}
      </div>
    </div>
  );
};

export default AccordionSection;
