import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class OfferLevel extends Component {

  constructor(props) {
    super(props);
    this.state = {
        leagues: [
            'Premier League',
            'Championship',
            'League 1',
            'League 2',
            'League North',
            'League South',
            'Amateur League North',
            'Amateur League South'
        ]
    }
  }

  render() {
    
    return (
      <div className="test">
        <div class="offer">
            <div class="offer-grid">
            {this.state.leagues.map((league) => {
               return <div class="league">
                <div class="league--1 flex-center justify-center">
                    <i class="fa fa-star star"></i>
                </div>
                <div class="league--2 flex-center">
                    <p class="league-name" key={league}>{league}</p>
                </div>
                <div class="league--3 flex-center justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-chevron-right chevron"></i></a>
                </div>
            </div>
             })}
            </div>
        </div>
      </div>
    );
  }
}

export default OfferLevel;