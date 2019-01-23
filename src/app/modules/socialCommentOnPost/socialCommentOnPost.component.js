import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
import CommentsOnPost from './../../components/containers/commentsOnPost/commentsOnPost.component.js';
import WriteComment from './../../components/common/writeComment/writeComment.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class SocialTimeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commentsData: DataProvider.commentsOnPostData(),
    }
  }


  render() {
    const headerIcons = this.state.commentsData.map(item => {
      return <HeaderIcons key={'headerIcons_' + item.id} headerData={item.headerIcons} />
    })

    const comments = this.state.commentsData.map(item => {
      return <CommentsOnPost key={'commentsOnPost_' + item.id} commentData={item.postData}/>
    })

    return (
      <div className="test">
        {headerIcons}
        {comments}
        <WriteComment />
      </div>
    );
  }
}

export default SocialTimeline;