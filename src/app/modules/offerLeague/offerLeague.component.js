import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import LeagueTable from './../../components/common/leagueTable/leagueTable.component.js';
import Footer from '../../components/common/footer/footer.component.js';

class OfferLeague extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderIcons />
        <div className='margin-top'><LeagueTable /></div>
        <Footer />
      </div>
    );
  }
}

export default OfferLeague;