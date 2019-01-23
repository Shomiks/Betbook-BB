import React, { Component } from 'react';
import Ticket from '../../common/ticket/ticket.component.js';
import TicketTotalCoef from '../../common/ticketTotalCoef/ticketTotalCoef.component';

class TicketsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const matchesArr = this.props.matches.map(item => {
      return <Ticket key={item.id} winner={item.winner} teams={item.teams} coefficient={item.coefficient}/>
    })
    return (
      <div className="test">
      {matchesArr}
      <TicketTotalCoef />
      </div>  
    );
  }
}

export default TicketsContainer;