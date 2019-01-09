import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../../common/userInfo/userInfo.component.js';
import Ticket from '../../common/ticket/ticket.component.js';
import SocialIcons from '../../common/socialIcons/socialIcons.component.js';

class TicketPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserInfo userName={this.props.userName} secondaryText={this.props.secondaryText}/>
        <Ticket />
        <div className="margin-bottom"><SocialIcons /></div>
      </div>
    );
  }
}

export default TicketPost;