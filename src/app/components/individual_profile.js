import React, { Component } from 'react';
import axios from 'axios';

class Individual_Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="individual-profile">
            <a href="#" class="btn btn-default justify-end"><i class="fa fa-bookmark star"></i></a>

            <div class="individual-profile--details justify-center">
                <img src="John-Doe.jpg" alt="" class="img"></img>
                <p class="profile-person">Me, myself and I</p>
                <p class="member-since">member since November 2018</p>
            </div>

            <a href="#" class="btn btn-default"><i class="fa fa-cog star"></i></a>
        </div>

        <div class="profile-menu">
            <a href="#" class="btn btn-gray justify-center flex-center">POSTS</a>
            <a href="#" class="btn btn-gray justify-center flex-center">TICKETS</a>
            <a href="#" class="btn btn-default justify-center flex-center">FOLLOWING</a>
        </div>
      </div>
    );
  }
}

export default Individual_Profile;