import React, { Component } from 'react';

import HeaderText from './../../components/common/headerText/headerText.component.js';
import AddNewPost from './../../components/containers/addNewPost/addNewPost.component.js';
import AddTicketToPost from './../../components/common/addTicketToPost/addTicketToPost.component.js';

class SocialNewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <HeaderText textLeft="CANCEL" title="New Post" textRight="SHARE"/>
        <div className="margin-top"><AddNewPost /></div>
      </div>
    );
  }
}

export default SocialNewPost;