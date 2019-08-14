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
                <p class="league-teams--team">{this.props.data.homeTeam}</p>
                <p class="league-teams--team">{this.props.data.guestTeam}</p>
                <p class="league-teams--date">{this.props.data.date}</p>
            </div>

            <div class="individual-league-grid--1">
                <span class="gray-num">19</span>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.data.homeTeamWin}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.data.draw}</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">{this.props.data.guestTeamWin}</p>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

// Rename to leagueRow

export default LeagueTable;