import React, { Component } from 'react';

import BetSlip from './../../components/common/betSlip/betSlip.component.js';

class OfferBetSlip extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <BetSlip />
      </div>
    );
  }
}

export default OfferBetSlip;