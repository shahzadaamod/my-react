import React from 'react';

const AnalystRecognitionCard = ({ link, type, logoSrc, title, date }) => {
  return (
    <div className="analysts-card">
      <a className="clickable" href={link} target="_blank">Link</a>
      <p>{type}</p>
      <div className="logo"><img alt={type} height="60" loading="lazy" src={logoSrc} width="90" /></div>
      <h4><a href={link}>{title}</a></h4>
      <div className="date">{date}</div>
    </div>
  );
};

export default AnalystRecognitionCard;
