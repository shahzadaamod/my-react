import React from 'react';
import AnalystRecognitionCard from './AnalystRecognitionCard';

const AnalystRecognitionSection = ({ recognitions }) => {
  return (
    <section className="analysts-recog">
      <div className="container">
        <p>Analyst Recognitions</p>
        <h2>Footprints of our success</h2>
        <div className="analysts-card-wrap">
          {recognitions.map((recognition, index) => (
            <AnalystRecognitionCard
              key={index}
              link={recognition.link}
              type={recognition.type}
              logoSrc={recognition.logoSrc}
              title={recognition.title}
              date={recognition.date}
            />
          ))}
        </div>
        <div className="blue-btn"><a href="#">View All <img alt="" height="16" loading="lazy" src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/arrow%20right-webp.webp" width="16" /></a></div>
      </div>
    </section>
  );
};

export default AnalystRecognitionSection;
