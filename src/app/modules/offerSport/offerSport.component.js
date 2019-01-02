import React, { Component } from 'react';

import HeaderIcons from '../../components/common/headerIcons/headerIcons.component.js';
import OfferLevel from './../../components/common/offerLevel/offerLevel.component.js';
import Footer from '../../components/common/footer/footer.component.js';

class SocialTimeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderIcons />
        <div className='margin-top'><OfferLevel /></div>
        <Footer />
      </div>
    );
  }
}

export default SocialTimeline;