import React, { Component } from 'react';
import axios from 'axios';
import Individual_Profile from './individual_profile';
import Profile_Post from './profile_post';
import Status_Post from './status_post';
import Footer from './footer';
import Social_Icons_Post from './social_icons_post';

class Profile_Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Individual_Profile></Individual_Profile>
        <Profile_Post></Profile_Post>
        <Status_Post></Status_Post>
        <Social_Icons_Post></Social_Icons_Post>
        <Profile_Post></Profile_Post>
        <Status_Post></Status_Post>
        <div className="margin-bottom"><Social_Icons_Post></Social_Icons_Post></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Profile_Posts;
