import React, { Component } from 'react';

import HeaderIcons from '../../components/common/headerIcons/headerIcons.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import { DataProvider } from '../../data/dataprovider.js';
import Match from '../../components/containers/match/match.component.js';
import MatchTips from '../../components/containers/matchTips/matchTips.component.js';
import MatchGoalTip from '../../components/common/matchGoalsTip/matchGoalTip.component.js';

class OfferGameDone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      matchData: DataProvider.getMatch(),
      tipsData: DataProvider.getMatchTips()
    }
  }


  render() {
    const headerIcons = this.state.matchData.map(item => {
      return <HeaderIcons key={'headerIcons_' + item.id} headerData={item.headerIcons} />
    })

    const matchInfo = this.state.matchData.map(item => {
      return <Match key={'match_' + item.id} matchData={item}/>
    })

    const tips = this.state.tipsData.map(item => {
      return <MatchTips key={'tips' + item.id} tip={item}/>
    })

    return (
      <div className="test">
        {headerIcons}
        <div className='play margin-top'>
        {matchInfo}
        {tips}
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfferGameDone;