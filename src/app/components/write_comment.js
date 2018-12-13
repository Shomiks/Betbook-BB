import React, { Component } from 'react';
import axios from 'axios';

class Write_Comment extends Component {

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

export default Write_Comment;
