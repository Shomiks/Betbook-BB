import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import _ from 'lodash';

class Offer_Level_2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const leagues = [];
    _.times(8, (i) => {
        leagues.push(<div class="league" key={i}>
                <div class="league--1 flex-center justify-center">
                    <i class="fa fa-star star"></i>
                </div>
                <div class="league--2 flex-center">
                    <p class="league-name">Champions League</p>
                </div>
                <div class="league--3 flex-center justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-chevron-right chevron"></i></a>
                </div>
            </div>)
    })
    return (
      <div className="test">
        <Header></Header>
        <div class="offer">
            <div class="offer-grid">
                {leagues}
            </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Offer_Level_2;