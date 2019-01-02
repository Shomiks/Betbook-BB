import React, { Component } from 'react';
import axios from 'axios';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="bottom-menu">
            <div class="bottom-menu-grid flex-center">
                <div class="bottom-menu-grid--1 justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-sitemap star"></i></a>
                </div>
                <div class="bottom-menu-grid--1 justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-star star"></i></a>
                </div>
                <div class="bottom-menu-grid--2 justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-star star"></i></a>
                </div>
                <div class="bottom-menu-grid--1 justify-center">
                    <a href="#" class="btn btn-selected"><i class="fa fa-user-circle star"></i></a>
                </div>
                <div class="bottom-menu-grid--1 justify-center">
                    <a href="#" class="btn btn-default"><i class="fa fa-star star"></i></a>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Footer;