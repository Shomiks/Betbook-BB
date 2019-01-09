import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import LeagueTable from './../../components/common/leagueTable/leagueTable.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import _ from 'lodash'

class OfferLeague extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const table = [];
    _.times(9, (i) => {
      table.push(
        <LeagueTable key={i}
        homeTeam="Burnley" 
        guestTeam="Bournemouth" 
        date="13.05.2018 20:45"
        homeTeamWin="2.39"
        draw="3.50"
        guestTeamWin="3.10"/>
      )
    })

    return (
      <div className="test">
        <HeaderIcons title="Premier League" />
        <div className='margin-top margin-bottom'>
        {table}
        </div>
        <Footer />
      </div>
    );
  }
}

export default OfferLeague;