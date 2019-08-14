import React, { Component } from 'react';
import axios from 'axios';

class SocialIcons extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="social-actions">
            <div class="social-actions--1 flex-center justify-center">
                <a href="#" class="btn btn-default"><i class="fa fa-comment star"></i></a>
                <span>{this.props.comments}</span>
            </div>
            <div class="social-actions--1 flex-center justify-center">
                <a href="#" class="btn btn-default"><i class="fa fa-heart star"></i></a>
                <span>{this.props.likes}</span>
            </div>
            <div class="social-actions--1 flex-center justify-center">
                <a href="#" class="btn btn-default"><i class="fa fa-bookmark star"></i></a>
                <span>{this.props.bookmarks}</span>
            </div>
            <div class="social-actions--1 flex-center justify-end">
                <a href="#" class="btn btn-default"><i class="fa fa-share star"></i></a>
            </div>
        </div>
      </div>
    );
  }
}

export default SocialIcons;