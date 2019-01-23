import React, { Component } from 'react';
import axios from 'axios';
import TicketMatch from '../ticketMatch/ticketMatch.component';
import _ from 'lodash';


class Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
        <div class="saved-posts">
            <div class="ticket">
                <div class="ticket-grid">
                    <TicketMatch winner={this.props.winner} teams={this.props.teams} coefficient={this.props.coefficient} />    
                </div>
            </div>
        </div>
    );
  }
}

export default Ticket;