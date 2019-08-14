import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class OfferGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="play margin-top">
            <div class="play-grid">
                <div class="play-grid--1">
                    <img src="burnley.png" class="team-img"></img>
                    <p class="team-name">burnley</p>
                    <p class="team-place">13th place</p>
                    <p class="team-table">Table</p>
                </div>
                <div class="play-grid--2">
                    <p class="vs">vs.</p>
                    <p class="play-date">13.05.2018</p>
                    <p class="play-stadium"></p>
                </div>
                <div class="play-grid--1">
                    <img src="burnley.png" class="team-img"></img>
                    <p class="team-name">Bournemouth</p>
                    <p class="team-place">13thplace</p>
                    <p class="team-table">Lineups</p>
                </div>
            </div>

            <div class="table-title">
                <p class="table-texts">Fulltime result</p>
            </div>

            <div class="coefficient">
                <div class="coefficient-grid">
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">1</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num"></p>
                        </div>
                    </div>
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">X</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num"></p>
                        </div>
                    </div>
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">2</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num"></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-title">
                <p class="table-texts">Match Goals</p>
            </div>

            <div class="match-goals">
                <div class="match-goals-grid">
                    <div class="match-goals-grid--1">
                        <div class="tip-grid flex-center ">
                            <p class="tip">Over 2.5</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">1.66</p>
                        </div>
                    </div>
                    <div class="match-goals-grid--1">
                        <div class="tip-grid flex-center ">
                            <p class="tip">Over 2.5</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">2.10</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-title">
                <p class="table-texts">Alternative Match Goals</p>
            </div>

            <div class="alternative-goals-title">
                <div class="alternative-goals-title--1 flex-center">

                </div>
                <div class="alternative-goals-title--2 flex-center justify-center">
                    <p class="tip">Over</p>
                </div>
                <div class="alternative-goals-title--3 flex-center justify-center">
                    <p class="tip">Under</p>
                </div>
            </div>

            <div class="alternative-goals-table">
                <div class="alternative-goals-table--1">
                    <p class="tip">0.5</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.50</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.10</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip">1.5</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.50</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.10</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip">3.5</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.50</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">3.10</p>
                </div>
            </div>

            <div class="table-title margin-bottom">
                <p class="table-texts">Total corners</p>
            </div>
        </div>
      </div>
    );
  }
}

export default OfferGame;