import React, { Component } from 'react';

class MatchGoalTip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className="test">
            <div class="table-title">
                <p class="table-texts">Match Goals</p>
            </div>

            <div class="match-goals">
                <div class="match-goals-grid">
                    <div class="match-goals-grid--1">
                        <div class="tip-grid flex-center ">
                            <p class="tip">Over {this.props.OverTip}</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">{this.props.overTipCoef}</p>
                        </div>
                    </div>
                    <div class="match-goals-grid--1">
                        <div class="tip-grid flex-center ">
                            <p class="tip">Under {this.props.underTip}</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">{this.props.underTipCoef}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MatchGoalTip;