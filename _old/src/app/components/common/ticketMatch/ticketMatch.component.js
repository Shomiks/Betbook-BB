import React, { Component } from 'react';
import axios from 'axios';

class TicketMatch extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    }
  }


  render() {
    return (
      
        <div class="ticket-grid--1">
            <div class="match flex-center">
                <p class="winner">{this.props.winner}</p>
                <p class="teams">{this.props.teams}</p>
            </div>
            <div class="status">
                <p class="num flex-center">{this.props.coefficient}</p>
                <span class="circle flex-center"></span>
            </div>
        </div>
      
    );
  }
}

export default TicketMatch;