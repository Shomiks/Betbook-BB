import React, { Component } from 'react';
import axios from 'axios';

class WriteComment extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="type-comment">
            <div class="img-round flex-center justify-center">
                <img src="John-Doe.jpg" alt="" class="img"></img>
            </div>

            <div class="post-comment flex-center justify-center">
                <textarea class="type-textarea"></textarea>
                <p class="submit-comment btn-blue">POST</p>
            </div>
        </div>
      </div>
    );
  }
}

export default WriteComment;