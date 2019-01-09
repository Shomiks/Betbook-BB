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
        <UserProfile userName="Me Myself and I" secondaryText="member since November 2018" />
        <PeopleFollowing userName="Marko Markovski" secondaryText="member since November 2018"/>
        <PeopleFollowing userName="Alek Aleksov" secondaryText="member since November 2018"/>
        <PeopleFollowing userName="Stefan Stevkov" secondaryText="member since November 2018"/>
        <PeopleFollowing userName="Nikola Nikolovski" secondaryText="member since November 2018"/>
        <PeopleFollowing userName="Vlade Vladev" secondaryText="member since November 2018"/>
        <div className="margin-bottom"><PeopleFollowing userName="Petar Petrovski" secondaryText="member since November 2018"/></div>
        <Footer />
      </div>
    );
  }
}

export default ProfileFollowing;