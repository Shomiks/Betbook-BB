import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Status_Post from './status_post';
import Profile_Post from './profile_post';
import Footer from './footer';
import Social_Icons_Post from './social_icons_post';
import Ticket from './ticket';

class Posts_Saved extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Header></Header>
        <div className="margin-top"><Profile_Post></Profile_Post></div>
        <Status_Post></Status_Post>
        <Social_Icons_Post></Social_Icons_Post>
        <Profile_Post></Profile_Post>
        <Ticket></Ticket>
        <div className="margin-bottom"><Social_Icons_Post></Social_Icons_Post></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Posts_Saved;