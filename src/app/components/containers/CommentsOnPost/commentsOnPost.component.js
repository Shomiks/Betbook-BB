import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../../common/userInfo/userInfo.component.js';
import PostText from '../../common/postText/postText.component.js';
// import WriteComment from '../../common/writeComment/writeComment.component.js';

class CommentsOnPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserInfo />
        <PostText />
      </div>
    );
  }
}

export default CommentsOnPost;