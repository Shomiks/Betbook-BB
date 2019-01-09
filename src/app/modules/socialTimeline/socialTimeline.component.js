import React, { Component } from 'react';

import HeaderButtons from './../../components/common/headerButtons/headerButtons.component.js';
import TextPost from './../../components/containers/textPost/textPost.component.js';
import TicketPost from './../../components/containers/ticketPost/ticketPost.component.js';
import Footer from './../../components/common/footer/footer.component.js';

class SocialTimeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderButtons btnLeft="Me" btnRight="Global"/>
        <div className='margin-top'><TextPost /></div>
        <TicketPost />
        <Footer />
      </div>
    );
  }
}

export default SocialTimeline;