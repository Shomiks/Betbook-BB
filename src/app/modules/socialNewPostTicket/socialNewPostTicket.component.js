import React, { Component } from 'react';

import HeaderText from './../../components/common/headerText/headerText.component.js';
import Ticket from './../../components/common/ticket/ticket.component.js';

class SocialNewPostTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderText />
        <div className='margin-top box-shadow'><Ticket /></div>
      </div>
    );
  }
}

export default SocialNewPostTicket;