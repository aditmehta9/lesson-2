import React from 'react';
import './menu-items.styles.scss';
const Menuitem = ({ title, imageurl, size }) => (
    <div className={`${size} menu-item`}>
        <div className='background-image' style={{
            background: `url(${imageurl})`
        }}></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default Menuitem;