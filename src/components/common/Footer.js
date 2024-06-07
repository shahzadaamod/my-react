// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-main">
          <div className="social-left">
            <div className="region region-footer-top">
              <div id="block-leadingtext">
                <div>
                  <div className="footerlogo">
                    <a href="/">
                      <img
                        alt=""
                        data-entity-type="file"
                        height="33"
                        src="assets/images/logo-header.png"
                        width="198"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="region region-footer">
              <div id="block-callushere-3">
                <div>
                  <div className="countryNo">
                    <p>North America: <a href="tel:+18444698900">+1.844.469.8900</a></p>
                    <p>Asia: <a href="tel:+911244698900">+91.124.469.8900</a></p>
                    <p>Email: <a href="mailto:welcome@techintegrants.com">welcome@techintegrants.com</a></p>
                  </div>
                </div>
              </div>
              <nav role="navigation" aria-labelledby="block-footermenuright-2-menu" id="block-footermenuright-2">
                <h2 className="visually-hidden" id="block-footermenuright-2-menu">Footer menu right</h2>
                <ul>
                  <li><a href="/service-list.php" data-drupal-link-system-path="node/2222">Services</a></li>
                  <li><a href="/product-list.php" data-drupal-link-system-path="node/3395">Products</a></li>
                  <li><a href="/" data-drupal-link-system-path="node/4147">Blog</a></li>
                </ul>
              </nav>
              <nav role="navigation" aria-labelledby="block-footermenuleft-menu" id="block-footermenuleft">
                <h2 className="visually-hidden" id="block-footermenuleft-menu">Footer Menu Left</h2>
                <ul>
                  <li><a href="/about-us.php" data-drupal-link-system-path="node/78">About</a></li>
                  <li><a href="/" data-drupal-link-system-path="node/65">Contact</a></li>
                </ul>
              </nav>
              <div id="block-kelltonfooterbottom">
                <div>
                  <div className="horizontalrowfooter">
                    <img alt="Footer bottom row separator" height="1" loading="lazy" src="https://d1ugv6dopk5bx0.cloudfront.net/s3fs-public/row.png" width="123" />
                  </div>
                  <p className="copyright-title">© 2024 TechIntegrants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
