import React, { Component } from 'react';
import axios from 'axios';
import Individual_Profile from './individual_profile';
import Profile_Post from './profile_post';
import Ticket from './ticket';
import Social_Icons_Post from './social_icons_post';

class Profile_Tickets extends Component {

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
        <Ticket></Ticket>
        <div className="margin-bottom"><Social_Icons_Post></Social_Icons_Post></div>
      </div>
    );
  }
}

export default Profile_Tickets;
