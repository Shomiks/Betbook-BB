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
      <div className="test">
        <div class="saved-posts">
            <div class="ticket">
                <div class="ticket-grid">
                    
                    <TicketMatch winner="Liverpool" teams="Liverpool - Huddersfield" coefficient="1.30" />

                    <TicketMatch winner="Chelsea" teams="Chelsea - Manchester United" coefficient="1.90" />
                    
                    <TicketMatch winner="Under 2.5" teams="Everton - Crystal Palace" coefficient="1.60" />

                    <div class="ticket-grid--1">
                        <div class="match flex-center">
                            <p class="winner">Total</p>
                        </div>
                        <div class="status">
                            <p class="total flex-center">3.95</p>
                            <span class="circle flex-center"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Ticket;