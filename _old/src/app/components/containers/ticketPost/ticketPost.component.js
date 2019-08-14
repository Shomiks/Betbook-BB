import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../../common/userInfo/userInfo.component.js';
import Ticket from '../../common/ticket/ticket.component.js';
import SocialIcons from '../../common/socialIcons/socialIcons.component.js';
import TicketTotalCoef from '../../common/ticketTotalCoef/ticketTotalCoef.component';
import TicketsContainer from '../ticketsContainer/ticketsContainer.component.js';

class TicketPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    
    return (
      <div className="test">
        <UserInfo userName={this.props.ticketData.personData.userName} secondaryText={this.props.ticketData.statusPost.secondaryText}/>
        <TicketsContainer matches={this.props.ticketData.matches}/>
        <div className="margin-bottom"><SocialIcons comments={this.props.ticketData.statusIcons.comments} likes={this.props.ticketData.statusIcons.likes} bookmarks={this.props.ticketData.statusIcons.bookmarks}/></div>
      </div>
    );
  }
}

export default TicketPost;