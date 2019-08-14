import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import LeaderboardsButtons from './../../components/common/leaderboardsButtons/leaderboardsButtons.component.js';
import LeaderboardsList from './../../components/common/leaderboardsList/leaderboardsList.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class SocialLeaderboards extends Component {

  constructor(props) {
    super(props);
    this.state = {
      leaderboardsData: DataProvider.socialLeaderboardsData()
    }
  }


  render() {
    const headerIcons = this.state.leaderboardsData.map(item => {
      return <HeaderIcons key={'headerIcons_' + item.id} headerData={item.headerIcons} />
    })

    const leaderboardsBtns = this.state.leaderboardsData.map(item => {
      return <LeaderboardsButtons key={'leaderboardsBtns_' + item.id} btnData={item.leaderboardsBtns} />
    })

    const leaderboardsList = this.state.leaderboardsData.map(item => {
      return <LeaderboardsList key={'leaderboardsList_' + item.id} list={item.leaderboards}/>
    })

    return (
      <div className="test">
        {headerIcons}
        {leaderboardsBtns}
        <div className='margin-bottom'>{leaderboardsList}</div>
        <Footer />
      </div>
    );
  }
}

export default SocialLeaderboards;