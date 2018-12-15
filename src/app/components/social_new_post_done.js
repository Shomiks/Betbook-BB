import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Profile_Post from './profile_post';
import Write_Comment from './write_comment';
import Add_Ticket from './add_ticket.js';
import Ticket from './ticket';


class Social_New_Post_Done extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <Header></Header>
        <div className="margin-top"><Profile_Post></Profile_Post></div>
        <Write_Comment></Write_Comment>
        <Add_Ticket></Add_Ticket>
        <Ticket></Ticket>
      </div>
    );
  }
}

export default Social_New_Post_Done;