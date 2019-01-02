import React, { Component } from 'react';
import axios from 'axios';

class HeaderIcons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Title'
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
                  <h1 class="title">{this.state.headerTitle}</h1>
                </div>
                <div class="header-grid--3">
                  <a href="#" class="btn btn-default"><i class="fa fa-chevron-left chevron"></i></a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default HeaderIcons;
