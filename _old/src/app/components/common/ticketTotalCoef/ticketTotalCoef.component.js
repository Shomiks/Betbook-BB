import React, { Component } from 'react';
import _ from 'lodash';

class TicketTotalCoef extends Component {

  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  render() {  
    return (
        <div className='saved-posts'>
            <div className="ticket">
                <div class="ticket-grid">
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
    );
  }
}

export default TicketTotalCoef;