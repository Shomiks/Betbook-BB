import React, { Component } from 'react';


import HeaderIcons from '../../components/common/headerIcons/headerIcons.component.js';
import OfferLevel from './../../components/common/offerLevel/offerLevel.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class OfferSport extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sports: DataProvider.getSports()
    }
  }

  render() {
    const headerIcons = this.state.sports.map(item => {
      return <HeaderIcons key={'headerIcons_' + item.id} headerData={item.headerIcons} />
    });

    const sportList = this.state.sports.map(item => {
      return <OfferLevel key={'sports_' + item.id} sport={item.sports} nextLink='/country/'/>
    })

    return (
      <div className="test">
        {headerIcons}
        <div className='margin-top'>{sportList}</div>
        <Footer />
      </div>
    );
  }
}

export default OfferSport;