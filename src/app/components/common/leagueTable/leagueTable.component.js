import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class LeagueTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
        homeTeam: 'Burnley',
        guestTeam: 'Bournemouth',
        homeTeamWin: 2.39,
        draw: 3.50,
        guestTeamWin: 3.10
    }
  }


  render() {
            const table = [];
      _.times(8, (i) => {
          table.push(
    <div class="individual-league" key={i}>
        <div class="individual-league-grid">
            <div class="league-teams flex-center">
                <p class="league-teams--team">{this.state.homeTeam}</p>
                <p class="league-teams--team">{this.state.guestTeam}</p>
                <p class="league-teams--date">13.05.2018 20:45</p>
            </div>

            <div class="individual-league-grid--1">
                <span class="gray-num">19</span>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.state.homeTeamWin}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.state.draw}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.state.guestTeamWin}</p>
            </div>
        </div>
    </div>)
      })
    return (
      <div className="test">
        {table}
      </div>
    );
  }
}

export default LeagueTable;