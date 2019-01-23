import React, { Component } from 'react';


class MatchTeam extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
        <div class="play-grid--1 justify-center">
            <img src="burnley.png" class="team-img"></img>
            <p class="team-name">{this.props.teamName}</p>
            <p class="team-place">{this.props.place}</p>
            <p class="team-table">{this.props.table}</p>
        </div>
    );
  }
}

export default MatchTeam;