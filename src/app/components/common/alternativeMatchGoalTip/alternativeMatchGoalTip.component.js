import React, { Component } from 'react';

class AlternativeMatchGoalTip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className="test">
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
                <div class="alternative-goals-table--1 gray">
                    <p class="tip">{this.props.tipOne}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipOneOverCoef}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipOneUnderCoef}</p>
                </div>
                <div class="alternative-goals-table--1 gray">
                    <p class="tip">{this.props.tipTwo}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipTwoOverCoef}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipTwoUnderCoef}</p>
                </div>
                <div class="alternative-goals-table--1 gray">
                    <p class="tip">{this.props.tipThree}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipThreeOverCoef}</p>
                </div>
                <div class="alternative-goals-table--1">
                    <p class="tip-num">{this.props.tipThreeUnderCoef}</p>
                </div>
            </div>
        </div>
    );
  }
}

export default AlternativeMatchGoalTip;