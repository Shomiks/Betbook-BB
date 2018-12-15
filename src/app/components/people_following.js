import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

class People_Following extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    let following = [];
    _.times(8, (i) => {
      following.push(<div class="profile-following" key={i}>
            <div class="profile-following-grid">
                <div class="img-round flex-center justify-center">
                        <img src="John-Doe.jpg" alt="" class="img"></img>
                </div>

                <div class="profile-name flex-center">
                    <p class="profile-person">Me, myself and I</p>
                    <p class="time-ago">member since Nov 2018</p>
                </div>

                <a href="#" class="btn btn-default justify-center flex-center"><i class="fa fa-star star"></i></a>        
            </div>
        </div>)
    })
    return (
      <div className="test">
        {following}
      </div>
    );
  }
}

export default People_Following;
