import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import './collections-overview.styles.scss'
import CollectionPreview from '../preview-collection/preview.collection.component'
const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({ id, ...othercollectionprops }) => (
                <CollectionPreview key={id} {...othercollectionprops} />
            ))
        }
    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
}
)

export default connect(mapStateToProps)(CollectionsOverview);