import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import PeopleFollowing from './../../components/common/peopleFollowing/peopleFollowing.component.js';
import Footer from '../../components/common/footer/footer.component.js';

class ProfileFollowing extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <UserProfile />
        <PeopleFollowing />
        <Footer />
      </div>
    );
  }
}

export default ProfileFollowing;