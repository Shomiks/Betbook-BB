import React from 'react';
// import '../../../src/style/app.scss'
import '../../../src/style/betbook/homelisting.scss';


function Listing(props) {
  return <div className='listing_container'>
    {props.children}
      </div>;
}

export default Listing;
