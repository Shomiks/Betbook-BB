import React, { Component } from 'react';
import axios from 'axios';

class TypePost extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="comment-area">
            <textarea class="comment-textarea" placeholder="Napisi komentar"></textarea>
        </div>
      </div>
    );
  }
}

export default TypePost;