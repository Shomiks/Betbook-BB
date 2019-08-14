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
          <div className='match-field'><MatchShort game={2}/></div>
          <div className='match-field'><MatchShort game={2}/></div>
          <div className='match-field'><MatchShort game={4}/></div>
          <div className='match-field'><MatchShort game={6}/></div>
        </div>
    )
  }
}

export default Week;
