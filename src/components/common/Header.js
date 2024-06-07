import React from 'react';
import "./Header.css";
const Header = () => {
  return (
    <header id="navbar" role="banner" className="headerBg">
    <div className="container">
        <div className="navbar-header"></div>
        <div id="navbar-collapse" className="navbar-collapse collapse">
            <div className="region-navigation">
                <div id="block-sitebranding"> <a href="/" title="Home" rel="home"> <img src="/assets/images/logo-header.png" alt="Home" width="192px" height="30px" /> </a> <a href="/" title="Home" rel="home">kellton</a></div>
                <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation">
                    <h2 className="visually-hidden" id="block-mainnavigation-menu">Main navigation</h2>
                    <ul className="o-menu c-menu-main level0">
                        <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="" className="c-menu-main__link">Services</a>
                            <div className="service-mega-menu">
                                <div className="container">
                                    <ul className="level0 o-menu c-menu-main__submenu level1 menu-box">
                                        <li className="c-menu-main__item c-menu-main__item--expanded">
                                            <h6>Digital Business Services</h6>
                                            <ul className="level0 c-menu-main__submenu level1 o-menu level2">
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/ai-ml" className="c-menu-main__link" data-drupal-link-system-path="node/3004">AI &amp; ML</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/ai-ml/utilitarian-ai" className="c-menu-main__link" data-drupal-link-system-path="node/3005">Utilitarian AI</a></li>
                                                        <li className="c-menu-main__item"> <a href="/ai-ml/predictive-analytics" className="c-menu-main__link" data-drupal-link-system-path="node/3006">Predictive Analytics</a></li>
                                                        <li className="c-menu-main__item"> <a href="/ai-ml/generative-ai" className="c-menu-main__link" data-drupal-link-system-path="node/1077">Generative AI</a></li>
                                                        <li className="c-menu-main__item"> <a href="/ai-ml/machine-learning" className="c-menu-main__link" data-drupal-link-system-path="node/3007">Machine Learning</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/digital-experience" className="c-menu-main__link" data-drupal-link-system-path="node/219">Digital Experience</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/digital-experience/product-strategy-and-consulting" className="c-menu-main__link" data-drupal-link-system-path="node/226">Product Strategy &amp; Consulting</a></li>
                                                        <li className="c-menu-main__item"> <a href="/digital-experience/product-design" className="c-menu-main__link" data-drupal-link-system-path="node/241">Product Design</a></li>
                                                        <li className="c-menu-main__item"> <a href="/digital-experience/product-management" className="c-menu-main__link" data-drupal-link-system-path="node/256">Product Management</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/product-engineering" className="c-menu-main__link" data-drupal-link-system-path="node/117">Product Engineering</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/product-engineering/digital-application-development" className="c-menu-main__link" data-drupal-link-system-path="node/118">Digital Application Development </a></li>
                                                        <li className="c-menu-main__item"> <a href="/product-engineering/mobile-engineering" className="c-menu-main__link" data-drupal-link-system-path="node/119">Mobile Engineering</a></li>
                                                        <li className="c-menu-main__item"> <a href="/product-engineering/iot-and-wearables-solutions" className="c-menu-main__link" data-drupal-link-system-path="node/120">IoT &amp; Wearables Solutions</a></li>
                                                        <li className="c-menu-main__item"> <a href="/product-engineering/quality-engineering-and-automation" className="c-menu-main__link" data-drupal-link-system-path="node/121">Quality Engineering</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/data-science-engineering" className="c-menu-main__link" data-drupal-link-system-path="node/470">Data Science &amp; Engineering </a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/data-science-engineering/data-engineering" className="c-menu-main__link" data-drupal-link-system-path="node/672">Data Engineering </a></li>
                                                        <li className="c-menu-main__item"> <a href="/data-science-engineering/data-science" className="c-menu-main__link" data-drupal-link-system-path="node/463">Data Science</a></li>
                                                        <li className="c-menu-main__item"> <a href="/data-science-engineering/visualization-and-analytics" className="c-menu-main__link" data-drupal-link-system-path="node/673">Visualization &amp; Analytics</a></li>
                                                        <li className="c-menu-main__item"> <a href="/data-science-engineering/integration-and-api" className="c-menu-main__link" data-drupal-link-system-path="node/457">Integration &amp; API</a></li>
                                                        <li className="c-menu-main__item"> <a href="/data-science-engineering/automation-and-rpa" className="c-menu-main__link" data-drupal-link-system-path="node/666">RPA</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/cloud-engineering" className="c-menu-main__link" data-drupal-link-system-path="node/568">Cloud Engineering</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/cloud-engineering/cloud-consulting" className="c-menu-main__link" data-drupal-link-system-path="node/569">Cloud Consulting</a></li>
                                                        <li className="c-menu-main__item"> <a href="/cloud-engineering/cloud-migration" className="c-menu-main__link" data-drupal-link-system-path="node/572">Cloud Migration</a></li>
                                                        <li className="c-menu-main__item"> <a href="/cloud-engineering/cloud-managed-services" className="c-menu-main__link" data-drupal-link-system-path="node/573">Cloud Managed Services</a></li>
                                                        <li className="c-menu-main__item"> <a href="/cloud-engineering/devsecops" className="c-menu-main__link" data-drupal-link-system-path="node/575">DevSecOps</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/nextgen-services" className="c-menu-main__link" data-drupal-link-system-path="node/567">NextGen Services</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/nextgen-services/blockchain-application-development" className="c-menu-main__link" data-drupal-link-system-path="node/475">Blockchain</a></li>
                                                        <li className="c-menu-main__item"> <a href="/nextgen-services/web3-development-services" className="c-menu-main__link" data-drupal-link-system-path="node/492">Web3</a></li>
                                                        <li className="c-menu-main__item"> <a href="/nextgen-services/metaverse-development-company" className="c-menu-main__link" data-drupal-link-system-path="node/479">Metaverse</a></li>
                                                        <li className="c-menu-main__item"> <a href="https://www.kellton.com/nextgen-services/digital-signage-solutions" className="c-menu-main__link">Digital Signage Solutions</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="c-menu-main__item c-menu-main__item--expanded">
                                            <h6>SAP </h6>
                                            <ul className="level0 c-menu-main__submenu level1 level3 o-menu level2">
                                                <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="/sap-application-services" className="c-menu-main__link" data-drupal-link-system-path="node/652">SAP Services</a>
                                                    <ul className="level0 c-menu-main__submenu level1 level2 o-menu level3">
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/s4-hana-implementations" className="c-menu-main__link" data-drupal-link-system-path="node/654">S/4HANA Implementations</a></li>
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/ams-support-services" className="c-menu-main__link" data-drupal-link-system-path="node/657">SAP AMS Support</a></li>
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/automation-services" className="c-menu-main__link" data-drupal-link-system-path="node/668">SAP Automation</a></li>
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/security-and-grc-services" className="c-menu-main__link" data-drupal-link-system-path="node/669">SAP Security &amp; GRC</a></li>
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/value-added-solutions" className="c-menu-main__link" data-drupal-link-system-path="node/670">SAP Value Added Solutions</a></li>
                                                        <li className="c-menu-main__item"> <a href="/sap-application-services/other-implementations" className="c-menu-main__link" data-drupal-link-system-path="node/671">Other SAP Implementations</a></li>
                                                    </ul>
                                                </li>
                                                <li className="c-menu-main__item"> <a href="/our-services" className="c-menu-main__link" data-drupal-link-system-path="node/2222">View All Services</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="c-menu-main__item c-menu-main__item--expanded"> <a href="" className="c-menu-main__link">Platforms &amp; Products</a>
                            <div className="service-mega-menu">
                                <div className="container">
                                    <ul className="level0 c-menu-main__submenu level2 level3 o-menu level1 menu-box">
                                        <li className="c-menu-main__item"> <a href="/products/audit.io" className="c-menu-main__link" data-drupal-link-system-path="node/1219">Audit.io</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/kellton4health" className="c-menu-main__link" data-drupal-link-system-path="node/1085">Kellton4Health</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/kellton4nft" className="c-menu-main__link" data-drupal-link-system-path="node/132">Kellton4NFT</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/kellton4commerce" className="c-menu-main__link" data-drupal-link-system-path="node/134">Kellton4Commerce</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/klgame" className="c-menu-main__link" data-drupal-link-system-path="node/150">KLGAME</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/thrive" className="c-menu-main__link" data-drupal-link-system-path="node/162">tHRive</a></li>
                                        <li className="c-menu-main__item"> <a href="/products/optima" className="c-menu-main__link" data-drupal-link-system-path="node/176">Optima</a></li>
                                        <li className="c-menu-main__item"> <a href="/products-platforms" className="c-menu-main__link" data-drupal-link-system-path="node/3395">View All Products</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                      
                      
                     
                        <li className="c-menu-main__item"> <a href="" className="c-menu-main__link">Services</a></li>
                    </ul>
                </nav>
               
            </div>
        </div>
    </div>
</header>
  );
};

export default Header;