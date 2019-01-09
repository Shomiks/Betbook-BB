import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import TicketPost from '../../components/containers/ticketPost/ticketPost.component.js';

class ProfileTickets extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserProfile userName="Me Myself and I" secondaryText="member since November 2018" />
        <TicketPost userName="Me Myself and I" secondaryText="20 min ago"/>
        <Footer />
      </div>
    );
  }
}

export default ProfileTickets;