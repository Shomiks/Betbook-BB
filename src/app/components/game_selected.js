import React, { Component } from 'react';
import axios from 'axios';

class Game_Selected extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="bet-slip">
            <div class="bet-slip-grid">
                <div class="bet-slip-grid--1">
                    <p class="bet-text justify-center flex-center">Bet Slip</p>
                    <span class="ticket-num flex-center">7</span>
                </div>
                <div class="bet-slip-grid--2 flex-center justify-end">
                    <p class="odds-text">Multiple Odds</p>
                    <p class="odds-num">43.5</p>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Game_Selected;