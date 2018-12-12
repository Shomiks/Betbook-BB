import React, { Component } from 'react';
import axios from 'axios';

import '../../scss/test.scss'

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <h1>Test page</h1>
      </div>
    );
  }
}

export default Test;
