import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';
import _ from 'lodash';

class Leaderboards extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const leaderboards = [];
    _.times(8, (i) => {
        leaderboards.push(<div class="leaderboards-list" key={i}>
        <div class="leaderboards-list-grid">
            <p class="list-place flex-center justify-end">1.</p>

            <div class="img-round flex-center justify-center">
                <img src="John-Doe.jpg" alt="" class="img"></img>
            </div>

            <div class="profile-name flex-center">
                <p class="profile-person">Me, myself and I</p>
                <p class="time-ago">points /success rate /koef???</p>
            </div>

            <p class="precent flex-center justify-center">89%</p>
        </div>
    </div>)
    })
    return (
      <div className="test">
        <Header></Header>
        <div class="leaderboards-grid margin-top">
            <div class="leaderboards-grid--1"></div>
            <div class="leaderboards-grid--2 flex-center">
                <div class="button1 flex-center">
                        <a href="#" class="btn btn-default btn-borders1">Tickets</a>
                    </div>
                    <div class="button2 flex-center">
                    <a href="#" class="btn btn-default btn-borders2">Singles</a> 
                    </div>
                </div>
            <div class="leaderboards-grid--3"></div>
        </div>
        {leaderboards}
        <Footer></Footer>
      </div>
    );
  }
}

export default Leaderboards;