import React, { Component } from 'react';
import axios from 'axios';

class Profile_Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="saved-posts">
            <div class="new-post">
                <div class="comment-profile">
                    <div class="img-round flex-center justify-center">
                        <img src="John-Doe.jpg" alt="" class="img"></img>
                    </div>

                    <div class="profile-name flex-center">
                        <p class="profile-person">Me, myself and I</p>
                        <p class="time-ago"> 20 minutes ago</p>
                    </div>

                    <div class="more-menu flex-center justify-center">
                        <span class="dots"></span>
                        <span class="dots"></span>
                        <span class="dots"></span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Profile_Post;
