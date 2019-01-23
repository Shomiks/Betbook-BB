import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import LeagueTable from './../../components/common/leagueTable/leagueTable.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import _ from 'lodash';
import {DataProvider} from './../../data/dataprovider'; 

class OfferLeague extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DataProvider.getMatches1()
    }

    console.log(this.state);
  }


  render() {
    const table = [];

    this.state.data.forEach(item => {
      table.push( <LeagueTable key = {"leaguetable_" + item.id} data={item} / >)
    });

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