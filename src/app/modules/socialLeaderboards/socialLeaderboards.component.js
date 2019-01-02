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
        <HeaderIcons />
        <LeaderboardsButtons />
        <div className="margin-bottom"><LeaderboardsList /></div>
        <Footer />
      </div>
    );
  }
}

export default SocialLeaderboards;