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
    console.log(this.props.userData);

    const data = this.props.userData.map(item => {
      return ([
        <UserInfo userName={item.personData.userName} secondaryText={item.statusPost.postSecondaryText}/>,
        <PostText textPost={item.statusPost.textPost} />,
        <SocialIcons comments={item.statusIcons.comments} likes={item.statusIcons.likes} bookmarks={item.statusIcons.bookmarks}/>
      ])
    })
    
    return (
      <div className="test">
        {data}
      </div>
    );
  }
}

export default TextPost;