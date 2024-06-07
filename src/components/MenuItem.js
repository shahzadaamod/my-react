// MenuItem.js
import React from 'react';

const MenuItem = ({ item }) => {
  const { label, link, children } = item;

  return (
    <li className="c-menu-main__item">
      <a href={link} className="c-menu-main__link">{label}</a>
      {children && (
        <div className="service-mega-menu">
          <div className="container">
            <ul className="level0 c-menu-main__submenu level1 o-menu level2">
              {children.map((child, index) => (
                <MenuItem key={index} item={child} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
