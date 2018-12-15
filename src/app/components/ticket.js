import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import Footer from './footer';

class Ticket extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <div className="test">
        <div class="saved-posts">
            <div class="ticket">
                <div class="ticket-grid">
                    <div class="ticket-grid--1">
                        <div class="match flex-center">
                            <p class="winner">Liverpool</p>
                            <p class="teams">Liverpool - Huddersfield</p>
                        </div>
                        <div class="status">
                            <p class="num flex-center">1.30</p>
                            <span class="circle flex-center"></span>
                        </div>
                    </div>
                    <div class="ticket-grid--1">
                        <div class="match flex-center">
                            <p class="winner">Chelsea</p>
                            <p class="teams">Chelsea - Manchester United</p>
                        </div>
                        <div class="status">
                            <p class="num flex-center">1.90</p>
                            <span class="circle flex-center"></span>
                        </div>
                    </div>
                    <div class="ticket-grid--1">
                        <div class="match flex-center">
                            <p class="winner">Under 2.5</p>
                            <p class="teams">Everton - Crystal Palace</p>
                        </div>
                        <div class="status">
                            <p class="num flex-center">1.60</p>
                            <span class="circle flex-center"></span>
                        </div>
                    </div>
                    <div class="ticket-grid--1">
                        <div class="match flex-center">
                            <p class="winner">Total</p>
                        </div>
                        <div class="status">
                            <p class="total flex-center">3.95</p>
                            <span class="circle flex-center"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Ticket;