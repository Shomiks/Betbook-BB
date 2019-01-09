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
    return (
      <div className="test">
        <div class="profile-following" >
            <div class="profile-following-grid box-shadow" >
                <UserInfo userName={this.props.userName} secondaryText={this.props.secondaryText}/>

                <a href="#" class="btn btn-default justify-center flex-center"><i class="fa fa-star star"></i></a>        
            </div>
        </div>
      </div>
    );
  }
}

export default PeopleFollowing;