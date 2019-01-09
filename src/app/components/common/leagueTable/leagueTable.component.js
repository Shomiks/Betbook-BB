import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class LeagueTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
       
    }
  }


  render() {

    return (
      <div className="test">
        <div class="individual-league" >
        <div class="individual-league-grid">
            <div class="league-teams flex-center">
                <p class="league-teams--team">{this.props.homeTeam}</p>
                <p class="league-teams--team">{this.props.guestTeam}</p>
                <p class="league-teams--date">{this.props.date}</p>
            </div>

            <div class="individual-league-grid--1">
                <span class="gray-num">19</span>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.homeTeamWin}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.draw}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.guestTeamWin}</p>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default LeagueTable;