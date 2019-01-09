import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import LeaderboardsButtons from './../../components/common/leaderboardsButtons/leaderboardsButtons.component.js';
import LeaderboardsList from './../../components/common/leaderboardsList/leaderboardsList.component.js';
import Footer from '../../components/common/footer/footer.component.js';

class SocialLeaderboards extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderIcons title="Leaderboards"/>
        <LeaderboardsButtons btnLeft="Tickets" btnRight="Singles"/>
        <LeaderboardsList listPlace="1" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="89"/>
        <LeaderboardsList listPlace="2" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="87"/>
        <LeaderboardsList listPlace="3" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="83"/>
        <LeaderboardsList listPlace="4" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="79"/>
        <LeaderboardsList listPlace="5" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="77"/>
        <LeaderboardsList listPlace="6" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="72"/>
        <LeaderboardsList listPlace="7" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="70"/>
        <div className="margin-bottom"><LeaderboardsList listPlace="8" userName="Marko Markovski" secondaryText="points/success rate/koef???" percent="65"/></div>
        <Footer />
      </div>
    );
  }
}

export default SocialLeaderboards;