import React, { Component } from 'react';
import axios from 'axios';

class Add_Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="add-tickets">
            <div class="add-icon justify-center flex-center">
                <a href="#" class="btn btn-default"><i class="fa fa-star star"></i></a>
            </div>

            <div class="ticket-list flex-center">
                <p>Tiketi</p>
            </div>

            <div class="remove-ticket flex-center justify-end">
            </div>
        </div>
      </div>
    );
  }
}

export default Add_Ticket;