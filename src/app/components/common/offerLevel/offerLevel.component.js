import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import _ from 'lodash';

class OfferLevel extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const list = this.props.sport.map(item => {
        return <Link to={this.props.nextLink + item.id} key={item.id} className="league btn-default">
                    <div class="league--1 flex-center justify-center">
                        <i class="fa fa-star star"></i>
                    </div>
                    <div class="league--2 flex-center">
                        <p class="league-name">{item.sportName}</p>
                    </div>
                    <div class="league--3 flex-center justify-center">
                        <span class="chevron right"></span>
                    </div>
                </Link>
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