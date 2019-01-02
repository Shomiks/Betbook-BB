import React, { Component } from 'react';
import axios from 'axios';
import UserInfo from '../../common/userInfo/userInfo.component.js';
import PostText from '../../common/postText/postText.component.js';
import SocialIcons from '../../common/socialIcons/socialIcons.component.js';

class TextPost extends Component {

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
        <SocialIcons />
      </div>
    );
  }
}

export default TextPost;