import React, { Component } from 'react';
import axios from 'axios';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="header">
            <div class="header-grid">
                <div class="header-grid--1 flex-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-chevron-left chevron"></i></a>
                </div>
                <div class="header-grid--2 flex-center">
                    <h1 class="title">Saved posts</h1>
                </div>
                <div class="header-grid--3">
            
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
