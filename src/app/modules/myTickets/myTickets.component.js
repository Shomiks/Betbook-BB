import React, { Component } from 'react';

import HeaderButtons from '../../components/common/headerButtons/headerButtons.component';
import Footer from '../../components/common/footer/footer.component';
import Ticket from '../../components/common/ticket/ticket.component';

class MyTickets extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderButtons btnLeft="Active" btnRight="History"/>
        <div className="margin-top"><Ticket /></div>
        <Footer />
      </div>
    );
  }
}

export default MyTickets;