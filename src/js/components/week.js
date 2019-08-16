import React from 'react';
import MatchShort from './match_short';


class Week extends React.Component {

  constructor(props) {
    super(props);

    this.state = {}

  }

  render(){


    return (
        <div>
          <div className='match-field'><MatchShort /></div>
          <div className='match-field'><MatchShort /></div>
          <div className='match-field'><MatchShort /></div>
          <div className='match-field'><MatchShort /></div>
        </div>
    )
  }
}

export default Week;
