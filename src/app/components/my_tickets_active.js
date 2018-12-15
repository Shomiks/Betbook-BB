import React, { Component } from 'react';
import axios from 'axios';
import Ticket from './ticket';
import Header_2 from './header_2';
import Footer from './footer';

class My_Tickets_Active extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
      <Header_2></Header_2>
      <div className="margin-top box-shadow"><Ticket></Ticket></div>
      <div className="box-shadow"><Ticket></Ticket></div>
      <div className="margin-bottom box-shadow"><Ticket></Ticket></div>
      <Footer></Footer>
      </div>
    );
  }
}

export default My_Tickets_Active;