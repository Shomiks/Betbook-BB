import React, { Component } from 'react';

import HeaderText from './../../components/common/headerText/headerText.component.js';
import CommentsOnPost from './../../components/containers/commentsOnPost/commentsOnPost.component.js';
import WriteComment from './../../components/common/writeComment/writeComment.component.js';

class SocialTimeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderText />
        <div className='margin-top'><CommentsOnPost /></div>
        <WriteComment />
      </div>
    );
  }
}

export default SocialTimeline;