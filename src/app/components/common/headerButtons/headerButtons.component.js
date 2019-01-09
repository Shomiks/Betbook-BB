import React, { Component } from 'react';
import axios from 'axios';

class HeaderButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="header">
        <div class="header-grid-history">
            <div class="header-grid-history--1 flex-center"></div>
            <div class="header-grid-history--2 flex-center">
                <div class="button1 flex-center">
                    <span class="notification">1</span>
                    <a href="#" class="btn btn-default btn-borders1">{this.props.btnLeft}</a>
                </div>
                <div class="button2 flex-center">
                   <a href="#" class="btn btn-default btn-borders2">{this.props.btnRight}</a> 
                </div>
            </div>
            <div class="header-grid-history--3">
                <a href="#" class="btn btn-default"><i class="fa fa-calendar calendar"></i></a>
            </div>
        </div>
    </div>
      </div>
    );
  }
}

export default HeaderButtons;