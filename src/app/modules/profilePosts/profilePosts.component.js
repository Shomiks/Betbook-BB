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
        <UserProfile />
        <TextPost />
        <Footer />
      </div>
    );
  }
}

export default ProfilePosts;