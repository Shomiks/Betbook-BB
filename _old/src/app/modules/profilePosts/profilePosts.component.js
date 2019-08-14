import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import TextPost from '../../components/containers/textPost/textPost.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class ProfilePosts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: DataProvider.getUserProfilePosts(),
      userProfile: DataProvider.getUserProfile()
    }
  }


  render() {
    const userInfo = this.state.userProfile.map(item => {
      return <UserProfile key={'userInfo_' + item.id} userData={item} />
    });
    
    const posts = this.state.userData.map(item => {
      console.log(item.posts);
      
      return <TextPost key={'posts_' + item.id} userData={item.posts}/>
    })
    
    return (
      <div className="test">
        {userInfo}
        {posts}
        <Footer />
      </div>
    );
  }
}

export default ProfilePosts;