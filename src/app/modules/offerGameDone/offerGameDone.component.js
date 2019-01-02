import React, { Component } from 'react';

import OfferGame from './../../components/common/offerGame/offerGame.component.js';
import HeaderIcons from '../../components/common/headerIcons/headerIcons.component.js';
import Footer from '../../components/common/footer/footer.component.js';

class OfferGameDone extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderIcons />
        <OfferGame />
        <Footer />
      </div>
    );
  }
}

export default OfferGameDone;