import React from 'react';

const Blog = ({ blogData }) => {
  return (
    <div className="blog-slider">
      {blogData.map((blog, index) => (
        <div key={index} className="blog-content-block">
          <div className="blog-content-img">
            <img src={blog.imageUrl} alt="Blog Image" />
          </div>
          <div className="blog-content-desc">
            <h5 className="type-tit"><a href="#">{blog.title}</a></h5>
            <span className="type-date">{blog.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;