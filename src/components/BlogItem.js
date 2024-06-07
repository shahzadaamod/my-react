import React from 'react';

const BlogItem = ({ imageUrl, type, title, link, date }) => {
  return (
    <div className="blog-content-block">
      <div className="blog-content-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="blog-content-desc">
        <span className="type-c">{type}</span>
        <h5 className="type-tit"><a href={link} tabIndex="0">{title}</a></h5>
        <span className="type-date">{date}</span>
      </div>
    </div>
  );
};

export default BlogItem;
