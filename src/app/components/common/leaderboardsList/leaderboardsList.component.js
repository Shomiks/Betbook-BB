import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../userInfo/userInfo.component.js';
import _ from 'lodash';

class LeaderboardsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // listPlace: 1,
      // precent: 89
    }
  }


  render() {


    return (
      <div className="test">
        <div class="leaderboards-list">
          <div class="leaderboards-list-grid">
            <p class="list-place flex-center justify-end">{this.props.listPlace}.</p>

            <UserInfo userName={this.props.userName} secondaryText={this.props.secondaryText} />

            <p class="precent flex-center justify-end">{this.props.percent}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaderboardsList;

    // const list = [];
    // _.times(5, (i) => {
    //   list.push(<div class="leaderboards-list" key={i}>
    //         <div class="leaderboards-list-grid">
    //             <p class="list-place flex-center justify-end">{this.state.listPlace}.</p>

    //             <UserInfo />

    //             <p class="precent flex-center justify-end">{this.state.precent}%</p>
    //         </div>
    //     </div>)
    // })