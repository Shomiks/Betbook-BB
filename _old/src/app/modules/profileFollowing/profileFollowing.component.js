import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import PeopleFollowing from './../../components/common/peopleFollowing/peopleFollowing.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class ProfileFollowing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfile: DataProvider.getUserProfile(),
      peopleFollowing: DataProvider.getPeopleFollowing()
    }
  }


  render() {
    const userInfo = this.state.userProfile.map(item => {
      return <UserProfile key={'userInfo_' + item.id} userData={item} />
    });

    const following = this.state.peopleFollowing.map(item => {
      return <PeopleFollowing key={'peopleFollowing_' + item.id} people={item.people} />
    })

    return (
      <div className="test">
      {userInfo}
      <div className="margin-bottom">{following}</div> 
      <Footer />
      </div>
    );
  }
}

export default ProfileFollowing;