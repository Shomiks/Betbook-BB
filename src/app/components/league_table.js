import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class League_Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
      const table = [];
      _.times(8, (i) => {
          table.push(
    <div class="individual-league" key={i}>
        <div class="individual-league-grid">
            <div class="league-teams flex-center">
                <p class="league-teams--team">Burnley</p>
                <p class="league-teams--team">Bournemouth</p>
                <p class="league-teams--date">13.05.2018 20:45</p>
            </div>

            <div class="individual-league-grid--1">
                <span class="gray-num">19</span>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">3.50</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">3.50</p>
            </div>
            <div class="individual-league-grid--2">
                <p class="tip-num">3.50</p>
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

export default League_Table;