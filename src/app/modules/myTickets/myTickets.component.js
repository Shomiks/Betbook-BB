import React, { Component } from 'react';

import HeaderButtons from '../../components/common/headerButtons/headerButtons.component';
import Footer from '../../components/common/footer/footer.component';
import TicketsContainer from '../../components/containers/ticketsContainer/ticketsContainer.component.js';
import { DataProvider } from '../../data/dataprovider';

class MyTickets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ticketData: DataProvider.getTicketPostData(),
      headerData: DataProvider.getHeaderButtonsTickets()
    }
  }


  render() {
    const ticket = this.state.ticketData.map(item => {
      return <TicketsContainer key={"ticketMatch_" + item.id} matches={item.matches}/>
    });
    
    const headerButtons = this.state.headerData.map(item => {
      return <HeaderButtons key={'headerButtons_' + item.id} data={item}/>
    })

    return (
      <div className="test">
        {headerButtons}
        <div className='margin-top box-shadow'>{ticket}</div>
        <div className='box-shadow'>{ticket}</div>
        <div className='box-shadow margin-bottom'>{ticket}</div>
        <Footer />
      </div>
    );
  }
}

export default MyTickets;