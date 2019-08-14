import React, { Component } from 'react';
import axios from 'axios';

class HeaderText extends Component {

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
                    <a href="#" class="btn btn-blue">{this.props.headerText.textLeft}</a>
                </div>
                <div class="header-grid--2 flex-center">
                    <h1 class="title">{this.props.headerText.title}</h1>
                </div>
                <div class="header-grid--3">
                  <a href="#" class="btn btn-blue">{this.props.headerText.textRight}</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default HeaderText;
