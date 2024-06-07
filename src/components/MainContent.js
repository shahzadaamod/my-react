// MainContent.js
import './MainContent.css';
import React, { useState,useEffect, useRef } from 'react';
import TestComponent from './TestComponent';
import SliderTitleComponent from './SliderTitleComponent';
import ProductAccordion from './ProductAccordion';
import AccordionSection from './AccordionSection';
import AnalystRecognitionSection from './AnalystRecognitionSection';
import MissionComponent from './Mission'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BlogItem from './BlogItem'; // Import the BlogItem component
import Brand from './Brand';
import accordionData from './../data/accordionData.json';
import sliderTitleData from './../data/sliderTitleData.json';
import testComponentData from './../data/testComponentData.json';
import brandData from './../data/brandData.json';
import missionData from './../data/missionData.json';
import blogData from './../data/blogData.json';

const MainContent = () => {
  // Define dynamic data


  const [activeIndex, setActiveIndex] = useState(0); // Define activeIndex state
  
  const handleAccordionClick = (index) => {
    setActiveIndex(index); // Update activeIndex state when accordion is clicked
  };
  
   


  

  let sliderRef = useRef(null);


  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const settings = {
    dots: false,
    nav:false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <main className="content">
        
      <section className="views-element-container" id="block-views-block-new-home-slider-block-1">
        <div>
          <div className="js-view-dom-id-895709902d7890ec0b364a5a1d7932a2839bf8ac32ceba8297f7e7a5609236ab">
            <div className="views-row">
              <div className="views-field views-field-field-why-kellton-for-data">
                <div className="field-content">
                  <div className="inner-banner">
                    <div className="slideWrap">
                      <div className="views-row slideFirstShow">
                        <img alt="Avasant Recognition" src="https://aamodfinserv.in/techintegrants/assets/images/slider1.png" />
                        <div className="banner-content">
                          <div className="container">
                            <h1>Kellton features in Avasant's SAP S/4HANA Services 2023-2024 Radarview<sup>TM</sup></h1>
                            <p className="blogs-text" multi-analyst="" partner="" recognized="" sap=""> </p>
                            <p><a className="site-btn blue" href="/news-announcement/kellton-recognized-as-challenger-in-avasant-sap-s4hana-services-report" tabIndex="0">Read More</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slick-slider slide-show">
                      {/* Render TestComponent dynamically */}
                      {testComponentData.map((data, index) => (
                        <TestComponent key={index} {...data} />
                      ))}
                    </div>
                    {/* Render SliderTitleComponent dynamically */}
                    <SliderTitleComponent data={sliderTitleData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accordion-home-wrap">
      <div className="container">
        <h2>We leverage technology to digitally transform companies.</h2>
        <div className="accordion-wrap">
          <div className="accordion-text">
            {accordionData.map((section, index) => (
              
              <AccordionSection
                key={index}
                section={section}
                isActive={index === activeIndex}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
          <div className="accordion-images mob-hide">
            {accordionData.map((section, index) => (
              <img
                key={index}
                alt={section.imgAlt}
                className={index === activeIndex ? 'show' : ''}
                height="772"
                idx={index + 1}
                loading="lazy"
                src={section.imgSrc}
                width="636"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
      
                                  
                                        

                                          <section className="brand_view_block new-home-brand">
      <div className="container">
        <div className="views-element-container" id="block-views-block-show-brands-block-6">
          <h2>Some prominent Brands we've helped grow</h2>
          <div>
            <div className="brand-main">
              {brandData.map((brand, index) => (
                <Brand key={index} {...brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <MissionComponent missionData={missionData} />
    {/* <section className="blogs-and-resources new-home-insights">
      <div className="container">
        <div className="head">
          <div className="left-content">
            <p>Blog</p>
            <h2>Take a look at bright Blog</h2>
          </div>
          <div className="btn-wrap"><a className="btn" href="#">View Blogs</a></div>
        </div>
        <div className="main">
          <Blog blogData={blogData} />
        </div>
      </div>
    </section>    */}


      
    <section className="blogs-and-resoucrecs new-home-insights">
      <div className="container">
        <div className="views-element-container" id="block-views-block-home-page-section-block-5">
          <div>
            <div className="js-view-dom-id-a131b9b17e7ee09bc32f3603a0e23484a7d3230976009d2da6d92f919ac35c00">
              <div className="views-row">
                <div className="views-field views-field-nothing">
                  <span className="field-content">
                    <div className="field_related_insights">
                      <div className="field_related_insights_inner">
                        <div className="head">
                          <div className="left-content">
                            <p>Blog</p>
                            <h2>Our Latest Blog</h2>
                          </div>
                          <div className="btn-wrap">
                            <a className="btn" href="/insights">View Blogs</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="right-container">
            <div className="slick-initialized slick-slider">
              
              <div className="slick-prev slick-arrow slick-disabled" aria-disabled="true" style={{ marginRight: '1em' }} onClick={previous}>
                <img src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Vector%20959.png" alt="" loading="lazy" width="16px" height="16px" />
              </div>
              <div className="slick-list draggable">
                <Slider ref={sliderRef} {...settings}>
                  {blogData.map((blog, index) => (
                    <div key={index} className="blog-content-block">
                      <div className="blog-content-img">
                        <img src={blog.imageUrl} alt={`Blog ${index + 1}`} />
                      </div>
                      <div className="blog-content-desc">
                        {/* <span className="type-c">{blog.type}</span> */}
                        <h5 className="type-tit"><a href={blog.link} tabIndex="0">{blog.title}</a></h5>
                        <span className="type-date">{blog.date}</span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="slick-next slick-arrow" aria-disabled="false" style={{ marginLeft: '1em' }} onClick={next}>
                <img src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/Vector%20959.png" alt="" loading="lazy" width="16px" height="16px"  onClick={next}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>     


    </main>
  );
};

export default MainContent;
