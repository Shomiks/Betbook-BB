import React, { Component } from 'react';
import axios from 'axios';

class AddTicketToPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      myTickets: 'Tiketi'
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
                <p>{this.state.myTickets}</p>
            </div>

            <div class="remove-ticket flex-center justify-end">
            </div>
        </div>
      </div>
    );
  }
}

export default AddTicketToPost;