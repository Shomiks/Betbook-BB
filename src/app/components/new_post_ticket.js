import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Ticket from './ticket';
import Footer from './footer';

class New_Post_Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Header></Header>
        <div className="margin-top box-shadow"><Ticket></Ticket></div>
        <div className="box-shadow"><Ticket></Ticket></div>
        <div className="margin-bottom box-shadow"><Ticket></Ticket></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default New_Post_Ticket;