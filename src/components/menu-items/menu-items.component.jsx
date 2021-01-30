import React from 'react';
import './menu-items.styles.scss';
import { withRouter } from 'react-router-dom';
const Menuitem = ({ title, imageurl, size, history, linkUrl, match }) => (
    <div
        className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image' style={{
            background: `url(${imageurl})`
        }}></div>
        <div className='content'>
            <div className='title'>{title.toUpperCase()}</div>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(Menuitem);