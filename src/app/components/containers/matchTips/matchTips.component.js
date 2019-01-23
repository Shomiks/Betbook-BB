import React, { Component } from 'react';
import MatchGoalTip from '../../common/matchGoalsTip/matchGoalTip.component';
import MatchFulltimeTip from '../../common/matchFulltimeTip/matchFulltimeTip';
import AlternativeMatchGoalTip from '../../common/alternativeMatchGoalTip/alternativeMatchGoalTip.component';

class MatchTips extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className="test">
            <MatchFulltimeTip
             homeWinTip={this.props.tip.fullTimeTips.homeTeamWinTip}
             homeWinCoef={this.props.tip.fullTimeTips.homeTeamWinTipCoef}
             drawTip={this.props.tip.fullTimeTips.drawTip}
             drawCoef={this.props.tip.fullTimeTips.drawTipCoef}
             guestWinTip={this.props.tip.fullTimeTips.guestTeamWinTip}
             guestWinCoef={this.props.tip.fullTimeTips.guestTeamWinTipCoef}
            />
            <MatchGoalTip 
             overTip={this.props.tip.goalsTips.overTip}
             overTipCoef={this.props.tip.goalsTips.overTipCoef}
             underTip={this.props.tip.goalsTips.underTip}
             underTipCoef={this.props.tip.goalsTips.underTipCoef}
            />
            <AlternativeMatchGoalTip 
             tipOne={this.props.tip.alternativeGoalsTips.tipOne}
             tipOneOverCoef={this.props.tip.alternativeGoalsTips.tipOneOverCoef}
             tipOneUnderCoef={this.props.tip.alternativeGoalsTips.tipOneUnderCoef}
             tipTwo={this.props.tip.alternativeGoalsTips.tipTwo}
             tipTwoOverCoef={this.props.tip.alternativeGoalsTips.tipTwoOverCoef}
             tipTwoUnderCoef={this.props.tip.alternativeGoalsTips.tipTwoUnderCoef}
             tipThree={this.props.tip.alternativeGoalsTips.tipThree}
             tipThreeOverCoef={this.props.tip.alternativeGoalsTips.tipThreeOverCoef}
             tipThreeUnderCoef={this.props.tip.alternativeGoalsTips.tipThreeUnderCoef}
            />
        </div>
    );
  }
}

export default MatchTips;