import React from 'react';
import Menuitem from '../menu-items/menu-items.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                <Menuitem key={id} title={title} imageurl={imageUrl} size={size} linkUrl={linkUrl} />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);