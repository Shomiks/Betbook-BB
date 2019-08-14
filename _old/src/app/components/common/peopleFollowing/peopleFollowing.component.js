import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import UserInfo from './../userInfo/userInfo.component.js';

class PeopleFollowing extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    const people = this.props.people.map(item => {
      return <div class="profile-following-grid box-shadow" key={item.id}>
        <UserInfo userName={item.userName} secondaryText={item.secondaryText}/>
        <a href="#" class="btn btn-default justify-center flex-center"><i class="fa fa-star star"></i></a>        
      </div>
    })
    return (
      <div className="test">
        <div class="profile-following" >
          {people}
        </div>
      </div>
    );
  }
}

export default PeopleFollowing;