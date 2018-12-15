import React, { Component } from 'react';
import axios from 'axios';
import Individual_Pofile from './individual_profile.js';
import People_Following from './people_following.js';
import Footer from './footer.js';

class Profile_Following extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Individual_Pofile></Individual_Pofile>
        <People_Following></People_Following>
        <Footer></Footer>
      </div>
    );
  }
}

export default Profile_Following;