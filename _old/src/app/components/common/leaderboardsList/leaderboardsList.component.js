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
    const list = this.props.list.map(item => {
      return <div class="leaderboards-list-grid" key={item.id}>
            <p class="list-place flex-center justify-end">{item.place}.</p>
            <UserInfo userName={item.userName} secondaryText={item.secondaryText} />
            <p class="precent flex-center justify-end">{item.percent}%</p>
          </div>
    })

    return (
      <div className="test">
        <div class="leaderboards-list">
          {list}
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