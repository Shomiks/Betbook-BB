import React, { Component } from 'react';

import HeaderText from './../../components/common/headerText/headerText.component.js';
import {DataProvider} from './../../data/dataprovider'; 
import TicketsContainer from '../../components/containers/ticketsContainer/ticketsContainer.component.js';
import _ from 'lodash';

class SocialNewPostTicket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerText: DataProvider.selectTicketHeaderData(),
      ticketData: DataProvider.getTicketPostData()
    }

    console.log(this.state);
  }


  render() {
    const headerTextData = [];

    this.state.headerText.forEach(item => {
      headerTextData.push(<HeaderText key={'headerText_' + item.id} headerText={item} />)
    })

    const ticket = this.state.ticketData.map(item => {
      return <TicketsContainer key={"ticketMatch_" + item.id} matches={item.matches}/>
    });

    return (
      <div className="test">
        {headerTextData}
        <div className='margin-top box-shadow'>{ticket}</div>
        <div className='box-shadow'>{ticket}</div>
        <div className='box-shadow'>{ticket}</div>
      </div>
    );
  }
}

export default SocialNewPostTicket;