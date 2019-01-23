import React, { Component } from 'react';
import axios from 'axios';

class PostText extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
        <div className="test">
            <div class="status-post">
                <p class="post">{this.props.textPost}</p>
            </div>
        </div>
    );
  }
}

export default PostText;