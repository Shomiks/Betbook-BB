import React from 'react';

function CompetitionItem(props) {
  return <div className='rectangle_layout'>
    <div className='noun_ball_image'> <img src='./assets/images/ball.png'/> </div>
    <div className='competition'><span className='text14'>{props.league.Competition}</span>
      <img className='flag' src={props.league.flag}/>
    </div>
    <div className='chevron'><img src='./assets/images/arrow_right.png'/></div>
  </div>;
}

CompetitionItem.defaultProps = {
  competitionname: ''
};

export default CompetitionItem;
