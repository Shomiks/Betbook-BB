import React, { Component } from 'react';
import _ from 'lodash';
import AddOnlineMatch from '../addOnlineMatch/addOnlineMatch.component';

class BetSlip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    const onlineMatch = this.props.ticketInfo.onlineMatches.map(item => {
        return <AddOnlineMatch key={'onlineMatch_' + item.id} matchData={item} removeMatch={this.props.removeMatch}/>
    })

    return (
        <div class="screen">
            <div class="wrapper">
                <div class="bet-slip-header">
                    <p class="bet-text justify-center flex-center">Bet Slip</p>
                    <span class="ticket-num flex-center">{this.props.ticketInfo.ticketInfo.folds}</span>
                    <p class="balance-text justify-end flex-center">Balance</p>
                    <p class="bet-balance flex-center">{this.props.ticketInfo.userBalance.balance} &euro;</p>
                    <div class="close-symbol justify-end flex-center">
                        <a href="#" class="btn btn-white "><i class="fa fa-times close "></i></a>
                    </div>
                </div>

                <div class="remove-all">
                    <p onClick={() => {this.props.removeAllMatches()}} class="remove-all--text justify-center flex-center">Remove All</p>
                </div>

                <div class="online-ticket">
                    {onlineMatch}
                </div>

                <div class="pay-ticket">
                    <div class="total-coef flex-center">
                        <p class="folds">{this.state.folds} Folds</p>
                        <div class="coef">{this.state.coefficientSum}</div>
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
    );
  }
}

export default BetSlip;