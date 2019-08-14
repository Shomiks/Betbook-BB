import React, { Component } from 'react';

class MatchFulltimeTip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className="test">
            <div class="table-title">
                <p class="table-texts">Fulltime result</p>
            </div>

            <div class="coefficient">
                <div class="coefficient-grid">
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">{this.props.homeWinTip}</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">{this.props.homeWinCoef}</p>
                        </div>
                    </div>
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">{this.props.drawTip}</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">{this.props.drawCoef}</p>
                        </div>
                    </div>
                    <div class="coefficient-grid--1">
                        <div class="tip-grid flex-center justify-center">
                            <p class="tip">{this.props.guestWinTip}</p>
                        </div>
                        <div class="tip-num-grid flex-center">
                            <p class="tip-num">{this.props.guestWinCoef}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default MatchFulltimeTip;