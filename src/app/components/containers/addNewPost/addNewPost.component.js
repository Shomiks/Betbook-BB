import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../../common/userInfo/userInfo.component.js';
import TypePost from '../../common/typePost/typePost.component.js';
import AddTicketToPost from '../../common/addTicketToPost/addTicketToPost.component.js';

class CommentsOnPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserInfo userName={this.props.userData.userName}/>
        <TypePost />
        <AddTicketToPost />
      </div>
    );
  }
}

export default CommentsOnPost;