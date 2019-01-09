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
        <UserInfo userName={this.props.userName} secondaryText={this.props.secondaryText}/>
        <PostText comment={this.props.comment} />
        <SocialIcons />
      </div>
    );
  }
}

export default TextPost;