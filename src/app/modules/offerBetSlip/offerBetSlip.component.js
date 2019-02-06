import React, { Component } from 'react';
import _ from 'lodash';
import BetSlip from './../../components/common/betSlip/betSlip.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class OfferBetSlip extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onlineTicket: DataProvider.getOnlineTicket()
    }
    this.removeMatch = this.removeMatch.bind(this);
    this.removeAllMatches = this.removeAllMatches.bind(this);
  }

  removeMatch(id) {
    const tickets = this.state.onlineTicket;
    tickets.forEach(ticket => {
      ticket.onlineMatches = _.filter(ticket.onlineMatches, match => match.id !== id)
    });
      
    this.setState({
      onlineTicket: tickets
    });
  }

  removeAllMatches() {
    const tickets = this.state.onlineTicket;
    tickets.forEach(ticket => {
      ticket.onlineMatches = []
    });

    this.setState({
      onlineTicket: tickets
    });
  }

  render() {
    const onlineTicket = this.state.onlineTicket.map(item => {
      return <BetSlip key={'onlineTicket_' + item.id} ticketInfo={item} removeMatch={this.removeMatch} removeAllMatches={this.removeAllMatches}/>
    })

    return (
      <div className="test">
        {onlineTicket}
      </div>
    );
  }
}

export default OfferBetSlip;