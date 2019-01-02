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
                <p class="post">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur sequi
                impedit. Non sequi magni officia similique eos et, delectus consequuntur assumenda maiores aperiam
                minima iure, sit quasi nesciunt excepturi.</p>
            </div>
        </div>
    );
  }
}

export default PostText;