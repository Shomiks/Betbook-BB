import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import TextPost from '../../components/containers/textPost/textPost.component.js';

class ProfilePosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserProfile userName="Me Myself and I" secondaryText="member since November 2018" />
        <TextPost userName="Me Myself and I" secondaryText="20 min ago" comment="Lorem Ipsum" />
        <TextPost userName="Me Myself and I" secondaryText="22.10.2018" comment="Lorem Ipsum" />
        <Footer />
      </div>
    );
  }
}

export default ProfilePosts;