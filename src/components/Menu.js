// Menu.js
import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ data }) => {
  return (
    <nav role="navigation" aria-labelledby="block-mainnavigation-menu" id="block-mainnavigation">
      <h2 className="visually-hidden" id="block-mainnavigation-menu">Main navigation</h2>
      <ul className="o-menu c-menu-main level0">
        {data.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
