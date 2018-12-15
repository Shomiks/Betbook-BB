import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Profile_Post from './profile_post';
import Status_Post from './status_post';
import Footer from './footer';

class Comment_On_Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Header></Header>
        <div className="margin-top"><Profile_Post ></Profile_Post></div>
        <Status_Post></Status_Post>
        <Profile_Post></Profile_Post>
        <Status_Post></Status_Post>
        <Profile_Post></Profile_Post>
        <div className="margin-bottom"><Status_Post></Status_Post></div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Comment_On_Post;