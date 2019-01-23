import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class OfferLevel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const list = this.props.sport.map(item => {
        return <div class="league" key={item.id}>
                <div class="league--1 flex-center justify-center">
                    <i class="fa fa-star star"></i>
                </div>
                <div class="league--2 flex-center">
                    <p class="league-name">{item.sportName}</p>
                </div>
                <div class="league--3 flex-center justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-chevron-right chevron"></i></a>
                </div>
            </div>
    });

    return (
    <div class="offer">
        <div class="offer-grid">
            {list}
        </div>
    </div>
    );
  }
}

export default OfferLevel;