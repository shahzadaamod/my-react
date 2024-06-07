import React from 'react';

const MissionComponent = ({ missionData }) => {
  return (
    <div className="home-mission">
      <div className="container">
        <p>Our mission</p>
        <h2>Our differentiators help us stay true to our mission.</h2>
        <div className="content">
          {missionData.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.imageUrl} alt={item.alt} width={item.width} height={item.height} loading="lazy" />
              <div className="text">
                <p>{item.title}</p>
                <h6>{item.subtitle}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionComponent;
