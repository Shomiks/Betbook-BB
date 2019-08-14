import React, { Component } from 'react';

class AddOnlineMatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
    <div class="add-match">
        <div class="add-match--grid">
            <a onClick={(e) => this.props.removeMatch(this.props.matchData.id, e)} class="btn btn-blue  flex-center justify-center"><i class="fa fa-times rem"></i></a>
                <div class="ticket-match flex-center">
                    <p class="ticket-match--winner">{this.props.matchData.winnerTeam}</p>
                    <p class="ticket-match--result">{this.props.matchData.fullTimeResult}</p>
                    <p class="ticket-match--teams">{this.props.matchData.match}</p>
                </div>
            <p class="tip-num flex-center justify-end">{this.props.matchData.coefficient}</p>
        </div>
    </div>
    );
  }
}

export default AddOnlineMatch;