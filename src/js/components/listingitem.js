import React from 'react';
// import '../../../src/style/app.scss'

function ListingItem(props) {
  return <div className='listing_item'>
    {props.children}
      </div>;
}

export default ListingItem;
