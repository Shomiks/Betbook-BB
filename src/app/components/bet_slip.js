import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class Bet_Slip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
      const matches = [];
      _.times(5, (i) => {
          matches.push(<div class="add-match">
                    <div class="add-match--grid">
                        <a href="#" class="btn btn-blue  flex-center justify-center"><i class="fa fa-times rem"></i></a>

                        <div class="ticket-match flex-center">
                            <p class="ticket-match--winner">Crystal Palace</p>
                            <p class="ticket-match--result">Fulltime Result</p>
                            <p class="ticket-match--teams">Crystal Palace vs West Brom</p>
                        </div>

                        <p class="tip-num flex-center justify-end">3.50</p>
                    </div>
                </div>)
      })
    return (
      <div className="test">
            <div class="screen">
        <div class="wrapper">

            <div class="bet-slip-header">
                <p class="bet-text justify-center flex-center">Bet Slip</p>
                <span class="ticket-num flex-center">7</span>
                <p class="balance-text justify-end flex-center">Balance</p>
                <p class="bet-balance flex-center">2863 &euro;</p>
                <div class="close-symbol justify-end flex-center">
                    <a href="#" class="btn btn-white "><i class="fa fa-times close "></i></a>
                </div>
            </div>

            <div class="remove-all">
                <p class="remove-all--text justify-center flex-center">Remove All</p>
            </div>

            <div class="online-ticket">
                {matches}
            </div>

            <div class="pay-ticket">
                <div class="total-coef flex-center">
                    <p class="folds">7 Folds</p>
                    <div class="coef">34.75</div>
                </div>

                <div class="payment flex-center">
                    <input type="text" class="playment--input" placeholder="Stake"></input>
                </div>
            </div>

            <div class="share-timeline">
                <p class="share-timeline--text flex-center justify-end">Share on your timeline</p>
                <label class="switch flex-center">
                    <input type="checkbox"></input>
                    <span class="slider round"></span>
                </label>
            </div>

            <div class="submit-ticket">
                <a href="#" class="btn submit-btn btn-white flex-center justify-center"><p>PLACE TICKET</p></a>
            </div>
            
        </div>
    </div>
      </div>
    );
  }
}

export default Bet_Slip;