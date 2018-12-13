import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import League_Table from './league_table';
import _ from 'lodash';


class Offer_Level_4 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Header></Header>
        <League_Table className="margin-top"></League_Table>
        <Footer></Footer>
      </div>
    );
  }
}

export default Offer_Level_4;