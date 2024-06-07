// ProductAccordionItem.js

import React from 'react';

const ProductAccordionItem = ({ content }) => {
  return (
    <div>
      <div className="acc-images desk-hide">
        <img src={content.imageSrc} alt={content.title} width="484" height="587" loading="lazy" />
      </div>
      {content.links.map((link, idx) => (
        <a key={idx} href={link.url}>{link.label}</a>
      ))}
    </div>
  );
};

export default ProductAccordionItem;
