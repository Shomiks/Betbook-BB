import React, { Component } from 'react';

import HeaderIcons from './../../components/common/headerIcons/headerIcons.component.js';
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
        <HeaderIcons title="Comments" />
        <div className='margin-top'><CommentsOnPost userName="Aleksandar Aleksovski" secondaryText="20 min ago" comment="Lorem Ipsum" /></div>

        <CommentsOnPost userName="Pero Perovski" secondaryText="19 min ago" comment="Lorem Ipsum" />

        <CommentsOnPost userName="Mite Mitev" secondaryText="19 min ago" comment="Lorem Ipsum" />
        <WriteComment />
      </div>
    );
  }
}

export default SocialTimeline;