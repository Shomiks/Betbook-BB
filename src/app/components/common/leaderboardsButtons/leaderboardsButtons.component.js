import React, { Component } from 'react';
import axios from 'axios';

class LeaderboardsButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      btnTickets: "Tickets",
      btnSingles: 'Singles'
    }
  }


  render() {
    return (
      <div className="test">
        <div class="leaderboards-grid margin-top">
            <div class="leaderboards-grid--1"></div>
            <div class="leaderboards-grid--2 flex-center">
                <div class="button1 flex-center">
                        <a href="#" class="btn btn-default btn-borders1">{this.state.btnTickets}</a>
                </div>
                <div class="button2 flex-center">
                    <a href="#" class="btn btn-default btn-borders2">{this.state.btnSingles}</a> 
                </div>
            </div>
            <div class="leaderboards-grid--3"></div>
        </div>
      </div>
    );
  }
}

export default LeaderboardsButtons;