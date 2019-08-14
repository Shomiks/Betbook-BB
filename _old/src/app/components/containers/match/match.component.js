import React, { Component } from 'react';
import MatchTeam from './../../common/matchTeam/matchTeam.component';

class Match extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div class="play-grid">
            <MatchTeam 
            teamName={this.props.matchData.homeTeam.teamName} 
            place={this.props.matchData.homeTeam.place} 
            table={'Table'}/>

            <div class="play-grid--2">
                <p class="vs">vs.</p>
                <p class="play-date">{this.props.matchData.matchDate.date}</p>
                <p class="play-stadium">{this.props.matchData.matchDate.stadium}</p>
            </div>

            <MatchTeam
            teamName={this.props.matchData.guestTeam.teamName}
            place={this.props.matchData.guestTeam.place} 
            table={'Lineups'}/>
        </div>
    );
  }
}

export default Match;