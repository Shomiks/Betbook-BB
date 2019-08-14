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
    console.log(this.props.commentData)
    const comments = this.props.commentData.map(item => {
      return ([<UserInfo key={item.userData.id} userName={item.userData.userName} secondaryText={item.comment.secondaryText}/>,
      <PostText key={item.comment.id} textPost={item.comment.textPost} />])
    })
    return (
      <div className="test">
        <div className='margin-top'>{comments}</div>
        
      </div>
    );
  }
}

export default CommentsOnPost;