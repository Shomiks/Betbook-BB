import React, { Component } from 'react';
import axios from 'axios';

class BetSlipButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchesNum: 7,
      odds: 'Multiple Odds',
      oddsNum: 43.5
    }
  }


  render() {
    return (
      <div className="test">
        <div class="bet-slip">
            <div class="bet-slip-grid">
                <div class="bet-slip-grid--1">
                    <p class="bet-text justify-center flex-center">Bet Slip</p>
                    <span class="ticket-num flex-center">{this.state.matchesNum}</span>
                </div>
                <div class="bet-slip-grid--2 flex-center justify-end">
                    <p class="odds-text">{this.state.odds}</p>
                    <p class="odds-num">{this.state.oddsNum}</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default BetSlipButton;